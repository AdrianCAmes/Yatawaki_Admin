import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestureService {


  apiURL: string = "http://localhost:8081/api/v1/gesture"

  constructor(private http: HttpClient) { }

  getGestures(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getGestureById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createGesture(gesture: Object): Observable<Object> {
    //const url = '/api/v1/Gesture';
    return this.http.post(this.apiURL, gesture);
  }

  changeGesture(gesture: Object): Observable<Object> {
    return this.http.put(this.apiURL, gesture);
  }

  deleteGesture(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getGestureStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }
}

