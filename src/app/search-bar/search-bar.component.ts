import { Component, OnInit } from '@angular/core';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [SearchBarService]
})
export class SearchBarComponent implements OnInit {
  location: string = "austin";
  keyword: string = "developer";
  jobs: Object[] = []

  constructor(private searchService: SearchBarService) {}

  lookupJobs(city, keyword) {
    console.log(city, keyword)
    this.searchService.searchLocation(city, keyword)
      .subscribe(res => {this.jobs = res.response.results.result, console.log(res)})
  }

  ngOnInit() {
  }

}
