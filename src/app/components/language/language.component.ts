
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChangeDetectionStrategy, Component, signal,input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-language',
  standalone: true,
  imports: [MatIconModule, MatExpansionModule, MatIconModule, MatInputModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  planet = input.required();
  phrases = [
    {
      catagory: 'greetings',
      text: 'Test tone 1',
      url: '/assets/language-sounds/test_tone.mp3',
    },
    {
      catagory: 'greetings',
      text: 'Test tone 2',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'greetings',
      text: 'Test tone 3',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'greetings',
      text: 'Test tone 4',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'greetings',
      text: 'Test tone 5',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'navigation',
      text: 'RANDOMFDS',
      url: '/assets/language-sounds/test_tone.mp3',
    },
    {
      catagory: 'navigation',
      text: 'SFDJLKFDSL',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'navigation',
      text: 'dsjfkdsof',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'navigation',
      text: 'dsjflkdsn',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'navigation',
      text: 'fdslfdslls',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'shopping',
      text: 'fdsfklmsd',
      url: '/assets/language-sounds/test_tone.mp3',
    },
    {
      catagory: 'shopping',
      text: 'dskfnsdjl',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'shopping',
      text: 'dsfnsdl',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'shopping',
      text: 'dsfjkldsfj',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
    {
      catagory: 'shopping',
      text: 'pdopfjsdonfdslfdls',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
  ];

  readonly panelOpenState = signal(false);
  panelOpened = signal<number | undefined>(undefined);
}
