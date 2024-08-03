import {Component, computed, inject, input} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {WeatherWidgetComponent} from "../../components/weather-widget/weather-widget.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    WeatherWidgetComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent {
  planetGuid = input.required<string>();


  planetService = inject(PlanetsService);
  planet = computed(() => {
    return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  });

}
