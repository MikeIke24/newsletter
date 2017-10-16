import { Injectable } from '@angular/core';

@Injectable()
export class DistanceService {

  constructor() { }

   getDistance(lat1, lon1, lat2, lon2, decimals) {
    if(!decimals){
      console.log('ERROR: No decimal place specified.');
      return 'Error: See console';
    }
      var R = 3958.756; // Radius of the earth in km
      var dLat = (lat2 - lat1) * Math.PI / 180; // deg2rad below
      var dLon = (lon2 - lon1) * Math.PI / 180;
      let φ1 = lat1 * Math.PI / 180;
      let φ2 = lat2 * Math.PI / 180;
      let x = dLon * Math.cos((φ1 + φ2) / 2);
      let y = dLat;
      let d = Math.sqrt(x * x + y * y) * R; //mi
      let round = parseFloat(d.toString() + 'e' + decimals.toString());
      return `${Number(Math.round(round)+'e-'+decimals)}`;
  }
}
