import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZHJpYW5hbWVzQGdtYWlsLmNvbSIsImV4cCI6MTY2NzM1NjU2OSwiaWF0IjoxNjUwMDc2NTY5LCJhdXRob3JpdGllcyI6WyJBRE1JTiJdfQ.r1k21ct8RuimQEhH-AEy4Rwhq5EeNO1ooWY5aMnL-es'
      }
    });
    return next.handle(request);
  }
}