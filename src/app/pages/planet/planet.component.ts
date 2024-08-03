import {Component, computed, inject, input} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    JsonPipe
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
