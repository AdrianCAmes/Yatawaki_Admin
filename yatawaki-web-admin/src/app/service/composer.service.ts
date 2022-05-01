import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  apiURL: string = "http://localhost:8081/api/v1/composer"

  constructor(private http: HttpClient) { }


  getComposers(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getComposerById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createComposer(composer: Object): Observable<Object> {
    //const url = '/api/v1/Composer';
    return this.http.post(this.apiURL, composer);
  }

  changeComposer(composer: Object): Observable<Object> {
    return this.http.put(this.apiURL, composer);
  }

  deleteComposer(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
