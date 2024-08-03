import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  planetsService = inject(PlanetsService);
}
