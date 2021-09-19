import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }


  intercept = (request:any,next:any) => {
    const authenticationService:AuthenticationService = this.injector.get(AuthenticationService);
    const tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authenticationService.getToken()}` 
        // Authorization: `Bearer xx.yy.zz`, 
      }
    });
    return next.handle(tokenizedRequest);
  }
}
