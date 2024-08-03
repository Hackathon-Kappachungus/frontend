import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PlanetComponent} from "./pages/planet/planet.component";
import {LanguageComponent} from './pages/planet/language/language.component';
import {WeatherWidgetComponent} from "./components/weather-widget/weather-widget.component";
import {LiveViewComponent} from "./pages/planet/live-view/live-view.component";

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
      },
      {
        path: 'language',
        component: LanguageComponent,
      },
      {
        path: 'live-view',
        component: LiveViewComponent
      }
    ]
  }
];
