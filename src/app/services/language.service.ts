import {Injectable, signal} from '@angular/core';
import {language} from "../types/languages";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languagePhrases = signal<language[]>([
    {
      guid: 'mars',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'Hola',
              audioFileUrl: '/assets/language-sounds/test_tone.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Adiós',
              audioFileUrl: '/assets/language-sounds/test_tone2.mp3',
            },
          ],
        },
      ],
    },
  ]);

  getLanguageCategory(guid: string) {
    return this.languagePhrases().find((category) => category.guid === guid);
  }
}
