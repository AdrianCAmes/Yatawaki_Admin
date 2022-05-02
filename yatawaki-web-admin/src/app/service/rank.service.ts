import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  apiURL: string = "http://localhost:8081/api/v1/rank"

  constructor(private http: HttpClient) { }

  getRanks(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getRankById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createRank(rank: Object): Observable<Object> {
    return this.http.post(this.apiURL, rank);
  }

  changeRank(rank: Object): Observable<Object> {
    return this.http.put(this.apiURL, rank);
  }

  deleteRank(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getRankStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }

}
