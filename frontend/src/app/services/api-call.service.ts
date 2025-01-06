import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:3000"

  get_data(){
    return this.httpClient.post<any>(`${this.apiUrl}/data`, {});
  }
}
