import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PlanetComponent} from "./pages/planet/planet.component";
import { LanguageComponent } from './pages/planet/language/language.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'planet/:planetGuid',
    component: PlanetComponent,

  }
,
   {
    path: 'planet/:planetGuid/language',
    component: LanguageComponent,

  }
];
