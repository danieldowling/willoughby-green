import { Http, Response, URLSearchParams } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class SearchBarService {
  location: string = "";
  keyword: string = "";

  constructor (private http: Http) {}

  searchLocation(searchData) {
    let params = new URLSearchParams();
    params.set('location', searchData.location);
    params.set('keyword', searchData.keyword);

    return this.http.get(`http://localhost:8080/indeed/`, { search: params })
  }

}
