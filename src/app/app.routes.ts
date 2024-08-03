import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PlanetComponent} from "./pages/planet/planet.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'planet',
    component: PlanetComponent
  }
];
