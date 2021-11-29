import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GeolocalizatorService } from 'src/app/services/geolocalizator.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  sitesList: Array<string>;
  currentLocation: Promise<GeolocalizatorService>;
  longitude: number;
  latitude: number;
  constructor(private geolocalizatorService: GeolocalizatorService) { }

  ngOnInit() {
    this.longitude = 0;
    this.latitude = 0;
  }
  async getLocation() {
    this.longitude = await (await this.geolocalizatorService.locate()).longitude;
    this.latitude = await (await this.geolocalizatorService.locate()).latitude;
    console.log(this.currentLocation);
  }

  addSite(location: string) {
    this.sitesList.push(location);
  }
}
