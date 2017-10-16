import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Jsonp} from '@angular/http';

@Injectable()
export class GetWeatherService {

  constructor(private http: HttpClient, private Jsonp:Jsonp) { }

  getWeather(){
    const url = 'https://api.darksky.net/forecast/20c268c34e92818a9d6bd6f119821732/37.8267,-122.4233';
    this.Jsonp.get(url + '?callback=JSONP_CALLBACK').subscribe(data => {
      console.log(data);
    });
  }
  }

