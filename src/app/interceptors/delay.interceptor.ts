
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { delay } from 'rxjs/operators';

export class DelayInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
      return next.handle(req).pipe(delay(5000 * Math.random()));
    }
}
