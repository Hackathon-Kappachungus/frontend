import {Injectable, signal} from '@angular/core';
import {planet} from "../types/planet";
import {planets} from "./planets";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  planets = signal<planet[]>(planets);
}
