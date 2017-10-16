import { Component, OnInit, Input } from '@angular/core';
import { GetWeatherService } from '../Services/get-weather/get-weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input('location') location: string;
  constructor(private getWeather: GetWeatherService) { }

  ngOnInit() {
    this.getWeather.getWeather();
  }

  
}
