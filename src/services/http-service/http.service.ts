import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 constructor(private http: HttpClient) { }

    public get(url: string): Observable<any>{
        let httpOptions = this.getHttpOptions();
        console.log('get', url, httpOptions);
        return this.http.get<any>(url, httpOptions).pipe(
        tap(_ => console.log('call successfull, get', url)),
        catchError(this.handleError<any>(url))
        );
    }

    public post(url: string, post: any): Observable<any>{
        let httpOptions = this.getHttpOptions();
        console.log(url);
        return this.http.post<any>(url, post, httpOptions).pipe(
        tap(_ => console.log('call successfull, post', url)),
        catchError(
            this.handleError<any>(url))
        );
    }

    public patch(url: string, post: any): Observable<any>{
        let httpOptions = this.getHttpOptions();
        console.log(url);
        return this.http.patch<any>(url, post, httpOptions).pipe(
        tap(_ => console.log('call successfull, patch', url)),
        catchError(
            this.handleError<any>(url))
        );
    }

    public delete(url: string): Observable<any>{
        let httpOptions = this.getHttpOptions();
        console.log(url);
        return this.http.delete<any>(url, httpOptions).pipe(
        tap(_ => console.log('call successfull, delete', url)),
        catchError(
            this.handleError<any>(url))
        );
    }

    private getHttpOptions(): {headers: HttpHeaders}{
        let token = localStorage.getItem('access_token');
        return {
            headers: new HttpHeaders({
              'Authorization': `Bearer ${token}`
            })
        };
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
        switch(error.status){
            default:
                // alert(error.message); 
                console.log(error.message); 
        }
      // Let the app keep running by returning an empty result.
      throw error;
    };
  }
}