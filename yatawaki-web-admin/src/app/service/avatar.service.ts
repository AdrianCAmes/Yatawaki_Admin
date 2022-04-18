import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }

  public getAvatars(): Observable<any> {
    const url = '/api/v1/avatar';
    return this.http.get<any>(url);
  }
}
