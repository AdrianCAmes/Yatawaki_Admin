import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymphonyGestureService {

  apiURL: string = "http://localhost:8081/api/v1/symphony-gesture"

  constructor(private http: HttpClient) { }

  getSymphoniesGesture(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getSymphonGestureyById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createSymphonyGesture(symphonyGesture: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(this.apiURL, symphonyGesture);
  }


  changeSymphonyGesture(symphonyGesture: Object): Observable<Object> {
    return this.http.put(this.apiURL, symphonyGesture);
  }

  deleteSymphonyGesture(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
