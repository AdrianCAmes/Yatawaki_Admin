import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymphonyInstrumentService {

  apiURL: string = "http://localhost:8081/api/v1/symphony-instrument"

  constructor(private http: HttpClient) { }

  getSymphoniesInstrument(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getSymphonInstrumentyById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createSymphonyInstrument(symphonyInstrument: Object): Observable<Object> {
    //const url = '/api/v1/avatar';
    return this.http.post(this.apiURL, symphonyInstrument);
  }


  changeSymphonyInstrument(symphonyInstrument: Object): Observable<Object> {
    return this.http.put(this.apiURL, symphonyInstrument);
  }

  deleteSymphonyInstrument(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
