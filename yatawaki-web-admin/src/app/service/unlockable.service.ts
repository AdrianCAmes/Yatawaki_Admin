import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnlockableService {

  constructor(private http: HttpClient) { }
  public getUnlockables(): Observable<any> {
    const url = '/api/v1/unlockable';
    return this.http.get<any>(url);
  }

}
