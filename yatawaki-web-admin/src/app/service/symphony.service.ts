import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymphonyService {

  apiURL: string = "http://localhost:8081/api/v1/symphony"

  constructor(private http: HttpClient) { }

  
  getSymphonies(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getSymphonyById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createSymphony(symphony: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(this.apiURL, symphony);
  }


  changeSymphony(symphony: Object): Observable<Object> {
    return this.http.put(this.apiURL, symphony);
  }

  deleteSymphony(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
