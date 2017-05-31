import { Http, Response, URLSearchParams } from "@angular/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SearchBarService {

  location: string = "";
  keyword: string = "";

  constructor (private http: Http) {}
  // lat: any = 34.020479 
  // lng: number = -118.4117325
    private lat = new Subject<any>();
    private lng = new Subject<any>();

    lat$ = this.lat.asObservable();
    lng$ = this.lng.asObservable(); 
  
  jobs: Object[] = [];
  
  searchLocation(searchData) {
    let params = new URLSearchParams();
    params.set('location', searchData.location);
    params.set('keyword', searchData.keyword); 
    return this.http.get(`http://localhost:8080/indeed/`, { search: params })
      .subscribe(res => {
        this.jobs = res.json().response.results.result
        this.lat.next(res.json().response.results.result[0].latitude)
        this.lng.next(res.json().response.results.result[0].longitude)
        console.log(this.lat, this.lng)
    })
  }
  
}
       