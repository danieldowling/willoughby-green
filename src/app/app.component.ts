import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SearchBarService } from './search-bar/search-bar.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './job/job.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SearchBarService],
  entryComponents: [SearchBarComponent, JobsListComponent, JobComponent]
})


export class AppComponent {
  title = 'app works!';
  private person: string = ''

  constructor(private appService: AppService) {
  }

 

}
