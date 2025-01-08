import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  get_data(){
    return this.httpClient.get<any>("http://localhost:3000/data", {});
  }
}
