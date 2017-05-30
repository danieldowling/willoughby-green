import { Http, Response, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
declare var google: any;

@Injectable()
export class MapService {

  constructor(private http: Http) { }

  getMap() {
    return this.http.get(`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_ID}&callback=initMap`)
  }
  
  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    });
  }

}
