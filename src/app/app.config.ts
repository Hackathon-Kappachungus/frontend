import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig, withViewTransitions} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {NgxView360Module} from "@egjs/ngx-view360";
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions(), withRouterConfig({
      paramsInheritanceStrategy: 'always'
    })),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNoopAnimations(),
    importProvidersFrom(
      NgxView360Module
    ),
      provideHttpClient()
  ]
};
