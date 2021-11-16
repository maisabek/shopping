import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DelayInterceptor } from "./delay.interceptor";
import { IndectorService } from "./Indector.interceptor";

export const Interceptors=[
  { provide: HTTP_INTERCEPTORS, useClass: IndectorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true }
]


