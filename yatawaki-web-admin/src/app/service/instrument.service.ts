import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  
  apiURL: string = "http://localhost:8081/api/v1/instrument"

  constructor(private http: HttpClient) { }

  getInstruments(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  
  getInstrumentById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createInstrument(instrument: Object): Observable<Object> {
    //const url = '/api/v1/Instrument';
    return this.http.post(this.apiURL, instrument);
  }

  changeInstrument(instrument: Object): Observable<Object> {
    return this.http.put(this.apiURL, instrument);
  }

  deleteInstrument(id?: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getInstrumentStatus(): Observable<any>{
    return this.http.get<any>(this.apiURL + '/status');
  }
}
