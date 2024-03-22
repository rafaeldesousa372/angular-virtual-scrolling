import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Photos } from './photos';

const apiUrl = "https://jsonplaceholder.typicode.com/photos";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 

      //TODO: send the error to remote logging infrastructure
      console.error(error); // log to cosole instead

      //Let the app keep runnung by returning an empty result.
      return of (result as T);
    };
  }
  //consome a API
  getPhotos (): Observable<Photos[]>{
    
    return this.http.get<Photos[]>(apiUrl)
    .pipe(
      tap(todos => console.log('Fetch todos')),
      catchError(this.handleError('getPhotos', []))
    );
  }
}
