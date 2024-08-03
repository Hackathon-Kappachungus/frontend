import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  planet = input.required();
  phrases = [
    {
      phrase: 'Test tone 1',
      url: '/assets/language-sounds/test_tone.mp3',
    },
    {
      phrase: 'Test tone 2',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
  ];
}
