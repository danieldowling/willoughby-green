import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  serverTest() {
    return this.http.get('http://localhost:8080/indeed')
      .map(res => res.json())
  }

}
