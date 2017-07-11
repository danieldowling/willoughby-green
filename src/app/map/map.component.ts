import { Component, OnInit, OnChanges, Input, NgZone } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { JobComponent } from '../job/job.component';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
 lat = 100  
 lng = 100

  constructor(public searchService: SearchBarService) {
    //access values saved from searchService, set lat and lng of map equal each time lat/lng changes in searchService
    this.searchService.lat$.subscribe(
      (updatedLat) => {
        this.lat = updatedLat;
      }),
    this.searchService.lng$.subscribe(
      (updatedLng) => {
        this.lng = updatedLng
      }
    )
    
  }

  ngOnInit() {
    // verify the browser has geolocation
    if ("geolocation" in navigator) {
      /* geolocation is available */
    } else {
      /* geolocation IS NOT available */
    }
  
  //gets users current location, sets lat/lng equal to their location on init
  navigator.geolocation.getCurrentPosition((position) => {
    this.lat = position.coords.latitude
    this.lng = position.coords.longitude
  });
    
}


  
}
