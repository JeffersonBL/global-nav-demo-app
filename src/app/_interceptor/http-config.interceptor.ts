import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export const InterceptorSkipHeader = 'X-Skip-Interceptor';
export const skipIntercetorpheaders = {
  headers: new HttpHeaders().set(InterceptorSkipHeader, ''),
};

export const X_VERSION = 'x-version';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // request = request.clone({
    //   headers: new HttpHeaders({
    //     'Cache-Control': 'no-cache',
    //     'Pragma': 'no-cache',
    //     'Expires': '0'
    //   })
    // });
    // console.log('interceptor', authModuleConfig.resourceServer.allowedUrls, request.url);


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
