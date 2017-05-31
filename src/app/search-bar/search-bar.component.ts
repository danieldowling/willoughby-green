import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  //providers: [SearchBarService]
})
export class SearchBarComponent implements OnInit {
  //@Output() searchClicked = new EventEmitter<any>();
  searchForm: FormGroup

  constructor(private searchService: SearchBarService, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  lookupJobs(searchData) {
    this.searchService.searchLocation(searchData)
  }

  createForm() {
    this.searchForm = this.fb.group({
      location: '',
      keyword: ''
    })
  }


}
