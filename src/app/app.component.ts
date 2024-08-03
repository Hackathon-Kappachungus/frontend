import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hackathon-frontned';

  @ViewChild('background') background?: ElementRef<HTMLElement>;

  // mouse move
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // move the background image
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    if (this.background) {
      this.background.nativeElement.style.backgroundPosition = `${x * 1.25}% ${y * 1.25}%`;
    }
  }
}
