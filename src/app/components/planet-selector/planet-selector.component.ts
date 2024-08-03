import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PlanetsService } from '../../services/planets.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planet-selector',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './planet-selector.component.html',
  styleUrl: './planet-selector.component.scss',
})
export class PlanetSelectorComponent {
  planetsService = inject(PlanetsService);
}
