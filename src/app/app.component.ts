import { DistanceService } from './Services/get-distance/distance.service';
import { OfficeLocationsService } from './Services/office-locations/office-locations.service';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kforce Newsletter';
  closestOfficeCity: string;
  closestOfficeSpecialityArr: string[][];
  FATSpeciality: string;
  GSpeciality: string;
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
    let specialities = [];
    const cities = this.officeLocations.cities;
    let tempDist = 10000;
    let closestOffice: string[];
    const curLat = this.location[0];
    const curLong = this.location[1];
    // let curLat = 27.9565429;
    // let curLong =  -82.4265217;
    Object.keys(cities).forEach((city) => {
      const offices = cities[city];
      Object.keys(offices).forEach((office) => {
        const lat = offices[office].coords[0];
        const long = offices[office].coords[1];
        const dist = parseFloat(this.getDist.getDistance(curLat, curLong, lat, long, 2));
        if (dist < tempDist) {
          tempDist = dist;
          const cityParsed = this.cityParse(city);
          closestOffice = [cityParsed, offices[office].speciality];
          const offices2 = cities[city];
          specialities = [];
          Object.keys(offices2).forEach(office2 => {
            specialities.push(offices2[office2].speciality);
          });
        }
      });
    });
    this.closestOfficeCity = closestOffice[0];
    this.closestOfficeSpecialityArr = this.specialityParse(specialities.reduce((a, b) => a.concat(b)));
    this.FATSpeciality = this.closestOfficeSpecialityArr[0].join(', ');
    this.GSpeciality = this.closestOfficeSpecialityArr[1][0];
    this.distance = tempDist;
  }
  cityParse(city) {
    return city.replace(/_/g, ' ').replace(/\$/, ', ');
  }
  specialityParse(arr) {
    const specialityDesc: string[][] = [[], []];
    arr.forEach(el => {
      switch (el) {
        case 'FA':
          specialityDesc[0].push('Finance and Accounting');
          break;
        case 'T':
          specialityDesc[0].push('Technology');
           break;
        case 'G':
          specialityDesc[1].push('Government Services');
      }
    });
    return specialityDesc;
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
