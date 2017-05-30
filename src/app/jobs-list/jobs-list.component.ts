import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';
import { JobComponent } from '../job/job.component'

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
jobs: Object[] = this.searchService.jobs

  constructor(private searchService: SearchBarService) { }

  ngOnInit() {
  }

}
