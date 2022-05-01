import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatisticService {

  
  apiURL: string = "http://localhost:8081/api/v1/user-statistics"

  constructor(private http: HttpClient) { }

  getUserStatistics(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getUserStatisticById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createUserStatistic(userStatistic: Object): Observable<Object> {
    return this.http.post(this.apiURL, userStatistic);
  }

  changeUserStatistic(userStatistic: Object): Observable<Object> {
    return this.http.put(this.apiURL, userStatistic);
  }

  deleteUserStatistic(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUserStatisticStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }
}
