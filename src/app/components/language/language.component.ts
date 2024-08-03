
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
      phrase: 'Test tone 1',
      url: '/assets/language-sounds/test_tone.mp3',
    },
    {
      phrase: 'Test tone 2',
      url: '/assets/language-sounds/test_tone2.mp3',
    },
  ];

  readonly panelOpenState = signal(false);
}
