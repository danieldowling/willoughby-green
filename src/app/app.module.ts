import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
