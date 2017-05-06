import { Component } from '@angular/core';
import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app works!';
  private person: string = ''

  constructor(private appService: AppService) {
    
    this.appService.serverTest()
      .subscribe(res => console.log(res))

  }
}
