import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';


@Injectable()
export class SearchBarService {
  location: string = "";
  keyword: string = "";

  constructor (private http: Http) {}

  searchLocation(city) {
    return this.http.get(`http://localhost:8080/indeed/${city}`)
      .map(res => res.json())
  }

  searchKeyword(keyword) {
    console.log(keyword);
  }

}
