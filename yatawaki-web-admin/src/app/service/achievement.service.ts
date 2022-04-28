import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  apiURL: string = "http://localhost:8081/api/v1/achievement"

  constructor(private http: HttpClient) { }

  getAchievements(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getAchievementById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createAchievement(achievement: Object): Observable<Object> {
    return this.http.post(this.apiURL, achievement);
  }

  updateAchievement(achievement: Object): Observable<Object> {
    return this.http.patch(this.apiURL, achievement);
  }

  changeAchievement(achievement: Object): Observable<Object> {
    return this.http.put(this.apiURL, achievement);
  }

  deleteAchievement(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
