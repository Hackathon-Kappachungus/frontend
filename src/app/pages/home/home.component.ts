import { Component } from '@angular/core';
import { LanguageComponent } from "../../components/language/language.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LanguageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
