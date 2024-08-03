
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChangeDetectionStrategy, Component, signal,input, inject, computed } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LanguageService } from '../../../services/language.service';
import { planet } from '../../../types/planet';
import { PlanetsService } from '../../../services/planets.service';


@Component({
  selector: 'app-language',
  standalone: true,
  imports: [
    MatIconModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  planetGuid = input.required<string>();

  languageService = inject(LanguageService);

  catagories = computed(() => {
    return this.languageService
      .languagePhrases()
      .find((phrases) => phrases.guid === this.planetGuid())?.category;
  });

  readonly panelOpenState = signal(false);
  panelOpened = signal<number | undefined>(undefined);
}
