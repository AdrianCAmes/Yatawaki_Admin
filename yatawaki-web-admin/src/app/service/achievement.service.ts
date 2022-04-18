import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private http: HttpClient) { }

  public getAchievements(): Observable<any> {
    const url = '/api/v1/achievement';
    return this.http.get<any>(url);
  }
}
