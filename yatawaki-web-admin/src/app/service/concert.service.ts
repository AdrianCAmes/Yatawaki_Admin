import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  apiURL: string = "http://localhost:8081/api/v1/concert"

  constructor(private http: HttpClient) { }

  getConcerts(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getConcertById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createConcert(concert: Object): Observable<Object> {
    return this.http.post(this.apiURL, concert);
  }

  changeConcert(concert: Object): Observable<Object> {
    return this.http.put(this.apiURL, concert);
  }

  deleteConcert(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getConcertStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }

}
