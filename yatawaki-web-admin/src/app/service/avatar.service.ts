import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService implements ErrorHandler{

  constructor(private http: HttpClient) { }

  apiURL: string = "http://localhost:8081/api/v1/avatar"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getAvatars(): Observable<any> {
    //const url = 'http://localhost:8081/api/v1/avatar';
    return this.http.get<any>(this.apiURL);
  }

  /*public getAvatarById(id: number): Observable<any>{
    //const url = `/api/v1/avatar/${id}`;
    return this.http.get<any>(this.apiURL + '/' + `${id}`);
  }*/
  
  getAvatarById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createAvatar(avatar: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(this.apiURL, avatar);
  }

  updateAvatar(avatar: Object): Observable<Object> {
    return this.http.patch(this.apiURL, avatar);
  }

  changeAvatar(avatar: Object): Observable<Object> {
    return this.http.put(this.apiURL, avatar);
  }

  deleteAvatar(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }
}
