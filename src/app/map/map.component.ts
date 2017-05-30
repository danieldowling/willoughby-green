import { Component, OnInit, Input } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';
import { JobComponent } from '../job/job.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  lat: number = 30.266483
  lng: number = -97.74176

  jobs: Object[] = this.searchService.jobs
  
  constructor(private searchService: SearchBarService) {
  }

  ngOnInit() { 
    
      

  }
   
}