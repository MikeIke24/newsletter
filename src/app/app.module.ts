import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

import { OfficeLocationsService } from './Services/office-locations/office-locations.service';
import { DistanceService } from './Services/get-distance/distance.service';
import { GetWeatherService } from './Services/get-weather/get-weather.service';
import { ParseTimeService } from './Services/parse-time/parse-time.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './tiles/weather/weather.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileShrinkButtonComponent } from './tiles/tile-shrink-button/tile-shrink-button.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TilesComponent,
    TileShrinkButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [OfficeLocationsService, DistanceService, GetWeatherService, ParseTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
