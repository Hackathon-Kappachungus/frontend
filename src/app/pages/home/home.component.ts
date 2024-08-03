import { Component, inject } from '@angular/core';
import { LanguageComponent } from '../../components/language/language.component';
import { RouterLink } from '@angular/router';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    LanguageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  planetsService = inject(PlanetsService);
}
