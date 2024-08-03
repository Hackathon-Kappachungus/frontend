import {Component, computed, HostBinding, inject, input} from '@angular/core';
import {EquirectProjection, NgxView360Module, View360Options} from "@egjs/ngx-view360";
import {PlanetsService} from "../../../services/planets.service";

@Component({
  selector: 'app-live-view',
  standalone: true,
  imports: [
    NgxView360Module
  ],
  templateUrl: './live-view.component.html',
  styleUrl: './live-view.component.scss'
})
export class LiveViewComponent {
  @HostBinding('class') class = 'h-full';

  planetGuid = input.required<string>();
  planetService = inject(PlanetsService);
  planet = computed(() => {
    return this.planetService.planets().find(planet => planet.guid === this.planetGuid());
  });

  options: Partial<View360Options> = {
    projection: new EquirectProjection({
      // change to get from planet() variable
      src: "https://media.discordapp.net/attachments/563283988265959433/1269239331105800222/Perseverance_Panorama_8k-2.jpg?ex=66af56bd&is=66ae053d&hm=b73508954f47319bbbb2dabc1f6346bb4b14cdc9a8578bef45d44819a6dbd0be&=&format=webp&width=1100&height=508",
    })
  }
}
