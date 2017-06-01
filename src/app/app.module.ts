import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './search-bar/search-bar.service';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './job/job.component';
import { MapComponent } from './map/map.component';
import { NumberPipe } from './map/map.pipe';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobsListComponent,
    JobComponent,
    MapComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google,
      libraries: ["places"]
    })
  ],
  providers: [
    AppService,
    SearchBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
