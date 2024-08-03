import {Component, inject} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {RouterLink} from "@angular/router";
import {WeatherWidgetComponent} from "../../components/weather-widget/weather-widget.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    WeatherWidgetComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  planetsService = inject(PlanetsService);
}
