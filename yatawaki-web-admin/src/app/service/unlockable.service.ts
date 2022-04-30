import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnlockableService {

  apiURL: string = "http://localhost:8081/api/v1/unlockable"

  constructor(private http: HttpClient) { }
  getUnlockables(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  getUnlockableStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }

  getUnlockerTypes(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/unlocker-types');
  }

  getUnlockerRareness(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/unlocker-types');
  }

  getUnlockableById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  deleteUnlockable(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
