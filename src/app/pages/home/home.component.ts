import {Component, ElementRef, HostListener, inject, signal, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {RandomMoveDirective} from "../../directives/random-move.directive";
import {PlanetsService} from "../../services/planets.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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

  http = inject(HttpClient)
  router = inject(Router)

  isLoading = signal(false);

  onFileSelected(event: any) {
    this.isLoading.set(true)
    
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result; // Full base64 data URL
        this.sendFile(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  sendFile(base64String: string) {
    const apiUrl = 'https://detect.roboflow.com/planet-detection/12';
    const apiKey = '4W5et173Ef79IDpQhlyi';

    const params = new HttpParams().set('api_key', apiKey);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Change to application/json
    });

    const data = base64String; // Wrap base64 string in an object

    this.http.post(apiUrl, data, { headers, params }).subscribe(
        (response: any) => {
          this.isLoading.set(false)
          if (response['predictions'].length > 0){
          this.router.navigate(['/planet', response['predictions'][0]['class'].toString().toLowerCase()]);
          } else {
            alert('Get good buddy')
          }
        },
        error => {
          this.isLoading.set(false)
          console.error('Error:', error);
          alert(JSON.stringify(error))
        }
    );
  }
}
