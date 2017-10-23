import { ParseTimeService } from '../../Services/parse-time/parse-time.service';
import { Component, OnInit, Input } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather/get-weather.service';
import { WeatherCondition } from './weather-conditions';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input('location') location: string;
  weatherCondition = new WeatherCondition();
  weatherLoaded = false;
  weatherData;
  temp: number;
  condition: string;
  summary: string;
  forecastArr: string[];
  weatherIconClass = ['wi', ''];
  constructor(private getWeather: GetWeatherService, public parseTime: ParseTimeService) { }

  ngOnInit() {
    this.getWeatherCall();
  }
  getWeatherCall(): void {
    //this.getWeather.getWeather(this.location[0], this.location[1]).then(data => this.onSuccess(data));
  }
  onSuccess(data) {
    console.log(data);
    this.weatherLoaded = true;
    this.temp = Math.round(data.currently.temperature);
    this.weatherIconClass[1] = this.setWeatherIcon(data.currently.icon);
    this.condition = this.setCondition(data.currently.icon);
    this.summary = data.daily.summary;
    this.forecastArr = data.daily.data;
  }
  setWeatherIcon(icon: string) {
    console.log(this.weatherCondition.info[icon]);
    return this.weatherCondition.info[icon][0];
  }
  setCondition(icon: string) {
    return this.weatherCondition.info[icon][1];
}
}
