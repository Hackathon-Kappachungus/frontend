import {Component, inject, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {RandomMoveDirective} from "../../directives/random-move.directive";
import {PlanetsService} from "../../services/planets.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import pica from 'pica';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RandomMoveDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  planetsService = inject(PlanetsService);
  http = inject(HttpClient);
  router = inject(Router);
  isLoading = signal(false);

  onFileSelected(event: any) {
    if (event.target.files.length === 0) {
      return;
    }

    this.isLoading.set(true);

    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          this.compressImage(image).then((base64String: string) => {
            this.sendFile(base64String);
          });
        };
      };
      reader.readAsDataURL(file);
    }
  }

  async compressImage(image: HTMLImageElement): Promise<string> {
    const canvas = document.createElement('canvas');
    const picaInstance = pica();
    canvas.width = image.width / 2;  // Example: reduce width by half
    canvas.height = image.height / 2;  // Example: reduce height by half

    await picaInstance.resize(image, canvas, {
      quality: 3,
    });

    return canvas.toDataURL('image/jpeg', 0.8);  // 0.8 is the quality level
  }

  sendFile(base64String: string) {
    const apiUrl = 'https://detect.roboflow.com/planet-detection/12';
    const apiKey = '4W5et173Ef79IDpQhlyi';
    const params = new HttpParams().set('api_key', apiKey);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(apiUrl, base64String, {headers, params}).subscribe(
      (response: any) => {
        this.isLoading.set(false);
        if (response['predictions'].length > 0) {
          this.router.navigate(['/planet', response['predictions'][0]['class'].toString().toLowerCase()]);
        } else {
          alert('Could not detect any planets in the image.');
        }
      },
      error => {
        this.isLoading.set(false);
        console.error('Error:', error);
        alert('Error occurred while processing the image. Please try again.');
      }
    );
  }
}
