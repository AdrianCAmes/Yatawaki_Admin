import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  constructor(private http: HttpClient) { }

  public getComposers(): Observable<any> {
    const url = '/api/v1/composer';
    return this.http.get<any>(url);
  }
}
