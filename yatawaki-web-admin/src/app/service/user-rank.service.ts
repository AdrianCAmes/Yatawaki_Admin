import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRankService {

  apiURL: string = "http://localhost:8081/api/v1/user-rank"

  constructor(private http: HttpClient) { }

  getUserRanks(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getUserRankById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createUserRank(userRank: Object): Observable<Object> {
    return this.http.post(this.apiURL, userRank);
  }

  changeUserRank(userRank: Object): Observable<Object> {
    return this.http.put(this.apiURL, userRank);
  }

  deleteUserRank(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUserRankStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }

}
