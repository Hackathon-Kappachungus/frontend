import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PlanetDetectionService {
    // curl -X POST "https://detect.roboflow.com/planet-detection/12?\;
    // string api_key = 4W5et173Ef79IDpQhlyi&\;
    // image=https://source.roboflow.com/IsHiwNd3s6TQ62sFXLIBFRGpPwD3/vLYxF3oLVdhPXBX4kXdB/original.jpg";

    http = inject(HttpClient)

    detect(image: string){
        return this.http.post('https://detect.roboflow.com/planet-detection/12?api_key=4W5et173Ef79IDpQhlyi&image=https://source.roboflow.com/IsHiwNd3s6TQ62sFXLIBFRGpPwD3/vLYxF3oLVdhPXBX4kXdB/original.jpg'
        ,{ })

    }

}