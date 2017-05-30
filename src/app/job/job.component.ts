import { Component, OnInit, Input } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
@Input() job
  constructor(private searchService: SearchBarService) { }
  
  ngOnInit() {
  }

}
