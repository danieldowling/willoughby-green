import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';
import { SearchBarComponent } from './search-bar/search-bar.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {
  title = 'app works!';
  private person: string = ''

  constructor(private appService: AppService) {
  }


}
