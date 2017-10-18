import { Component, OnInit, Input } from '@angular/core';
import { GetWeatherService } from '../Services/get-weather/get-weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input('location') location: string;
  weatherLoaded = false;
  temp: number;
  weatherData;
  weatherIconClass = ['wi', ''];
  condition: string;
  constructor(private getWeather: GetWeatherService) { }

  ngOnInit() {
    this.getWeatherCall();
  }
  getWeatherCall(): void {
    this.getWeather.getWeather(this.location[0], this.location[1]).then(data => this.onSuccess(data));
  }
  onSuccess(data) {
    console.log(data);
    this.weatherLoaded = true;
    this.temp = Math.round(data.currently.temperature);
    this.weatherIconClass[1] = this.setWeatherIcon(data.currently.icon);
    this.condition = this.setCondition(data.currently.icon);
  }
  setWeatherIcon(icon: string) {
    return 'wi-day-sunny';
  }
  setCondition(icon: string) {
    switch (icon) {
      case 'clear-day':
        return 'under clear skies';
      default:
        break;
    }
    return icon;
  }
}
