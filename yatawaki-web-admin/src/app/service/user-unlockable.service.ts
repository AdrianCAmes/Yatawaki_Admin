import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUnlockableService {

  apiURL: string = "http://localhost:8081/api/v1/user-unlockable"

  constructor(private http: HttpClient) { }

  getUserUnlockables(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getUserUnlockableById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createUserUnlockable(userUnlockable: Object): Observable<Object> {
    return this.http.post(this.apiURL, userUnlockable);
  }

  changeUserUnlockable(userUnlockable: Object): Observable<Object> {
    return this.http.put(this.apiURL, userUnlockable);
  }

  deleteUserUnlockable(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
