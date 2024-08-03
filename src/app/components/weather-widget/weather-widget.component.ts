import {Component, computed, inject, input, OnInit} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import {PlanetsService} from "../../services/planets.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [NgIf, NgForOf,CommonModule
  ],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent {
  planetGuid = input.required<string>();


  planetService = inject(PlanetsService);
  planet = computed(() => {
    return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  });
  // planetGuid = input.required<string>();
  // planetService = inject(PlanetsService);
  // planet = computed(() => {
  //   return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  // });
  //
  // weatherData: any;
  // lat: number = 36.8509; // Default latitude (e.g., Auckland)
  // lon: number = 174.7645; // Default longitude (e.g., Auckland)
  // apiKey = '919c34567d733393ab8a9e3cbcd39f1e'; // API key
  // apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  //
  // ngOnInit(): void {
  //   this.getWeather();
  // }
  //
  // getWeather(): void {
  //   fetch(
  //     `${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly&appid=${this.apiKey}&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.weatherData = data;
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching weather data', error);
  //     });
  // }

  getDayOfWeek(index: number): string {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const now = new Date();
    return days[(now.getDay() + index) % 7];
  }
}
