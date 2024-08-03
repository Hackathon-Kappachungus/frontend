import {Injectable, signal} from '@angular/core';
import {language} from "../types/languages";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languagePhrases = signal<language[]>([
    {
      guid: 'mars',
      category: [{
        name: 'Greetings',
        phrases: [
          {
            guid: 'hello',
            phrase: 'Hello',
            translation: 'Hola',
            audioFileUrl: 'https://example.com/hello.mp3'
          },
          {
            guid: 'goodbye',
            phrase: 'Goodbye',
            translation: 'Adiós',
            audioFileUrl: 'https://example.com/goodbye.mp3'
          }
        ]
      }]
    }
  ]);

  getLanguageCategory(guid: string) {
    return this.languagePhrases().find(category => category.guid === guid);
  }

}
