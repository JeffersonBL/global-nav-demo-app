import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Globals } from 'src/app/_globals/endpoints.global';

@Injectable({
  providedIn: 'root'
})
export class GlobalNavigationService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
  ) { }

  /**
 * Get navigation List
 * @param search
 * @param application
 * @returns
 */
  getNavigationList = (search: any, application?: string): Observable<any> => {
    application == undefined ? (application = '') : (application = application);
    const options = {
      params: new HttpParams()
        .set('search', search)
        .set('application', application),
    };
    const NavigationtEndpoint = this.globals.urlJoin('navigation', 'list');
    return this.http.get(NavigationtEndpoint, options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => throwError(error))
    );
  };

}
