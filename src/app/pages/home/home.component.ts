import {Component, inject} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {RouterLink} from "@angular/router";
import {RandomMoveDirective} from "../../directives/random-move.directive";

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
}
