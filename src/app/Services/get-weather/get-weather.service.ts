import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetWeatherService {
  root = 'https://api.darksky.net/forecast/';
  key = '20c268c34e92818a9d6bd6f119821732';
  callback = '?callback=JSONP_CALLBACK';
  constructor(private http: HttpClient, private Jsonp:Jsonp) { }
  getWeather(latitude, longitude): Promise<{}> {
    const location = `/${latitude},${longitude}`;
    const url = this.root + this.key + location + this.callback;
    return this.Jsonp.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }
  handleError = () => {
    console.log('Error: Get Weather Service');
  }
  convertFromUnix (unixDate: number) {
    const date = new Date(unixDate * 1000);
    console.log(date);
  }
}
