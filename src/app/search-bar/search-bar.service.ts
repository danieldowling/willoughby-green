import { Http, Response, URLSearchParams } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class SearchBarService {
  location: string = "";
  keyword: string = "";

  constructor (private http: Http) {}

  jobs: Object[] = [];
  
  searchLocation(searchData) {
    let params = new URLSearchParams();
    params.set('location', searchData.location);
    params.set('keyword', searchData.keyword);
    //let jobs =  this.http.get(`http://localhost:8080/indeed/`, { search: params })
    return this.http.get(`http://localhost:8080/indeed/`, { search: params })
      .subscribe(res => console.log(this.jobs = res.json().response.results.result)) 
  }

  
 
}
       