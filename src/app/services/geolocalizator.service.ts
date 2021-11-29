import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocalizatorService {
  coords: any;

  constructor() { }

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates.coords;
  }



}
