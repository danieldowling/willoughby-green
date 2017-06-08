import { Http, Response, URLSearchParams } from "@angular/http";
import { Injectable, Output, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SearchBarService {

  location: string = "";
  keyword: string = "";

  constructor (private http: Http) {}
  //set variables equal to new behavior subject
  private lat = new Subject<any>();
  private lng = new Subject<any>();
  //create observables
  lat$ = this.lat.asObservable();
  lng$ = this.lng.asObservable(); 
  
  jobs: Object[] = [];
  
  searchLocation(searchData) {
    let params = new URLSearchParams();
    params.set('location', searchData.location);
    params.set('keyword', searchData.keyword); 
    return this.http.get(`/indeed/`, { search: params })
      .subscribe(res => {
        //set value of jobs, lat, and lng
        console.log(res)
        this.jobs = res.json().response.results.result
        this.lat.next(res.json().response.results.result[0].latitude)
        this.lng.next(res.json().response.results.result[0].longitude)
        console.log(this.lat, this.lng, this.jobs)
    })
  }
  
}
       