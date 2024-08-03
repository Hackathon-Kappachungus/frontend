import {Component, computed, HostBinding, inject, input, OnInit} from '@angular/core';
import {EquirectProjection, NgxView360Module, View360Options} from "@egjs/ngx-view360";
import {PlanetsService} from "../../../services/planets.service";
import {planets} from "../../../services/planets";

@Component({
  selector: 'app-live-view',
  standalone: true,
  imports: [
    NgxView360Module
  ],
  templateUrl: './live-view.component.html',
  styleUrl: './live-view.component.scss'
})
export class LiveViewComponent implements OnInit {
  @HostBinding('class') class = 'h-full';

  planetGuid = input.required<string>();
  planetService = inject(PlanetsService);
  planet = computed(() => {
    return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  });

  options?: Partial<View360Options>;

  ngOnInit() {
    this.options = {
      projection: new EquirectProjection({
        // change to get from planet() variable
        src: this.planet()?.three60image ?? '',
      })
    }
  }
}
