import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PlanetComponent} from "./pages/planet/planet.component";
import {WeatherWidgetComponent} from "./components/weather-widget/weather-widget.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'planet/:planetGuid',
    component: PlanetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WeatherWidgetComponent
      }
    ]
  }
];
