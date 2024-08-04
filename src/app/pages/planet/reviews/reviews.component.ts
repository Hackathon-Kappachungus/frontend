
import {Component, computed, inject, input} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { WeatherWidgetComponent } from '../../../components/weather-widget/weather-widget.component';
import { PlanetsService } from '../../../services/planets.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    WeatherWidgetComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  planetGuid = input.required<string>();


  planetService = inject(PlanetsService);
  planet = computed(() => {
    return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  });

}
