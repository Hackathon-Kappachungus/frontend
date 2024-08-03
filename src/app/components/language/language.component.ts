import { Component, input } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  planet = input.required();
  phrases = [
    {
      phrase: 'Hello',
      url: '/assets/language-sounds/test_tone.mp3'
    }
  ];
}
