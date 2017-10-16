import { DistanceService } from './Services/get-distance/distance.service';
import { OfficeLocationsService } from './Services/office-locations/office-locations.service';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'app.Component Testing Location Services';
  closestOffice: string[];
  distance: number;
  locationSucceeded = false;
  location: string[] = [];
  constructor(private officeLocations: OfficeLocationsService, private getDist: DistanceService) {
  }
  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successFunc, this.errorFunc);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  successFunc = (position) => {
    this.storeCoords(position);
   }
  storeCoords(position) {
     console.log(position.coords);
     this.location.push(position.coords.latitude);
     this.location.push(position.coords.longitude);
     this.locationSucceeded = true;
     this.officeLoop();
  }
  officeLoop() {
    const cities = this.officeLocations.cities;
    let tempDist = 10000;
    let closest: string[];
    const curLat = this.location[0];
    const curLong = this.location[1];
    // curLat = 44.348431;
    // curLong = -100.281300;
    Object.keys(cities).forEach((city) => {
      const offices = cities[city];
      Object.keys(offices).forEach((office) => {
        const lat = offices[office].coords[0];
        const long = offices[office].coords[1];
        // console.log(city,office, lat,long);
        const dist = parseFloat(this.getDist.getDistance(curLat, curLong, lat, long, 2));
        // console.log(dist, [city]);
        if (dist < tempDist) {
          tempDist = dist;
          const cityParsed = this.cityParse(city);
          closest = [cityParsed, office];
        }
      });
    });
    this.closestOffice = closest;
    this.distance = tempDist;
  }
  cityParse(city) {
    return city.replace(/_/g, ' ').replace(/\$/, ', ');
  }
  errorFunc = (error) => {
    this.showError(error);
   }
  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        break;
    }
  }
}
