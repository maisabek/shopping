import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from  '@angular/common/http'
import { LoadingIndectorService } from '../services/Indector/loading-indector.service';
import { finalize} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IndectorService implements HttpInterceptor {
  constructor(private LoadingIndector:LoadingIndectorService) {}
  intercept(req:HttpRequest<any>,next:HttpHandler){
     this.LoadingIndector.start()
     
    // Return the original request
     return next.handle(req).
    // Stops the loading indicator when the HTTP call get cancelled, completes or throws an error
     pipe(finalize(() => this.LoadingIndector.stop()));
  }


}
