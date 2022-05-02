import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = "http://localhost:8081/api/v1/user"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(this.apiURL, user);
  }

  changeUser(user: Object): Observable<Object> {
    return this.http.put(this.apiURL, user);
  }

  deleteUser(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getUserStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }

  getUserRole(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/roles');
  }
}
