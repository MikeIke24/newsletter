import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

import { OfficeLocationsService } from './Services/office-locations/office-locations.service';
import { DistanceService } from './Services/get-distance/distance.service';
import { GetWeatherService } from './Services/get-weather/get-weather.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [OfficeLocationsService, DistanceService, GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
