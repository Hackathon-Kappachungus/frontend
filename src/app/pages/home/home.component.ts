import {Component, inject} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  planetsService = inject(PlanetsService);
}
