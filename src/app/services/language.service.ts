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
              audioFileUrl: '/assets/language-sounds/mars/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Adiós',
              audioFileUrl: '/assets/language-sounds/mars/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: '¿Cómo estás?',
              audioFileUrl: '/assets/language-sounds/mars/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'Gracias',
              audioFileUrl: '/assets/language-sounds/mars/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'Encantada de conocerte',
              audioFileUrl: '/assets/language-sounds/mars/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: '¿Hablas inglés?',
              audioFileUrl: '/assets/language-sounds/mars/doyouspeakenglish.mp3',
            },
          ],
        },
      ],
    },
    {
      guid: 'jupiter',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'Cześć',
              audioFileUrl: '/assets/language-sounds/jupiter/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Do widzenia',
              audioFileUrl: '/assets/language-sounds/jupiter/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: 'Jak się masz?',
              audioFileUrl: '/assets/language-sounds/jupiter/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'Dziękuję',
              audioFileUrl: '/assets/language-sounds/jupiter/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'Miło mi cię poznać',
              audioFileUrl: '/assets/language-sounds/jupiter/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: 'Czy mówisz po angielsku?',
              audioFileUrl: '/assets/language-sounds/jupiter/doyouspeakenglish.mp3',
            },
          ],
        },
      ],
    },
    {
      guid: 'uranus',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'Nǐ hǎo',
              audioFileUrl: '/assets/language-sounds/uranus/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Zàijiàn',
              audioFileUrl: '/assets/language-sounds/uranus/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: 'Nǐ hǎo ma?',
              audioFileUrl: '/assets/language-sounds/uranus/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'Xièxiè',
              audioFileUrl: '/assets/language-sounds/uranus/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'Hěn gāoxìng jiàn dào nǐ',
              audioFileUrl: '/assets/language-sounds/uranus/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: 'Nǐ huì shuō yīngyǔ ma?',
              audioFileUrl: '/assets/language-sounds/uranus/doyouspeakenglish.mp3',
            },
          ],
        },
      ],
    },
    {
      guid: 'neptune',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'Bonjour',
              audioFileUrl: '/assets/language-sounds/neptune/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Au revoir',
              audioFileUrl: '/assets/language-sounds/neptune/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: 'Comment vas-tu?',
              audioFileUrl: '/assets/language-sounds/neptune/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'Merci',
              audioFileUrl: '/assets/language-sounds/neptune/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'Ravi de vous rencontrer',
              audioFileUrl: '/assets/language-sounds/neptune/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: 'Parles-tu anglais?',
              audioFileUrl: '/assets/language-sounds/neptune/doyouspeakenglish.mp3',
            },
          ],
        },
      ],
    },
    {
      guid: 'pluto',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'Hallo',
              audioFileUrl: '/assets/language-sounds/pluto/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'Totsiens',
              audioFileUrl: '/assets/language-sounds/pluto/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: 'Hoe gaan dit?',
              audioFileUrl: '/assets/language-sounds/pluto/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'Dankie',
              audioFileUrl: '/assets/language-sounds/pluto/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'Aangename kennis',
              audioFileUrl: '/assets/language-sounds/pluto/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: 'Praat jy Engels?',
              audioFileUrl: '/assets/language-sounds/pluto/doyouspeakenglish.mp3',
            },
          ],
        },
      ],
    },
    {
      guid: 'saturn',
      category: [
        {
          name: 'Greetings',
          phrases: [
            {
              guid: 'hello',
              phrase: 'Hello',
              translation: 'annyeonghaseyo',
              audioFileUrl: '/assets/language-sounds/saturn/hello.mp3',
            },
            {
              guid: 'goodbye',
              phrase: 'Goodbye',
              translation: 'annyeonghi gaseyo',
              audioFileUrl: '/assets/language-sounds/saturn/goodbye.mp3',
            },
            {
              guid: 'howru',
              phrase: 'How are you?',
              translation: 'eotteohge jinaeseyo?',
              audioFileUrl: '/assets/language-sounds/saturn/howru.mp3',
            },
            {
              guid: 'thanku',
              phrase: 'Thank you',
              translation: 'gamsahabnida',
              audioFileUrl: '/assets/language-sounds/saturn/thanku.mp3',
            },
            {
              guid: 'nicetomeetu',
              phrase: 'Nice to meet you',
              translation: 'mannaseo bangawoyo',
              audioFileUrl: '/assets/language-sounds/saturn/nicetomeetu.mp3',
            },
            {
              guid: 'doyouspeakenglish',
              phrase: 'Do you speak English?',
              translation: 'dangsin-eun yeong-eoleulhasibnikka?',
              audioFileUrl: '/assets/language-sounds/jupiter/doyouspeakenglish.mp3',
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
