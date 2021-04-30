import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService{

  constructor( private httpClient: HttpClient){}
  // tslint:disable-next-line: typedef
  getData(url){
    return this.httpClient.get(url);
  }

}
