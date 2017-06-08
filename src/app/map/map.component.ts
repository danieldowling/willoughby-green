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

export class MapComponent implements OnChanges {
 lat = 34.020479
 lng = -118.4117325
  constructor(private searchService: SearchBarService) {
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
    //console.log(this.lat)
    //console.log(this.lng)
    //console.log('hello')
  }

  ngOnChanges() {
    // this.lat = this.searchService.lat
    // this.lng = this.searchService.lng

  }

}
