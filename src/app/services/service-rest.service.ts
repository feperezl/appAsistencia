import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, tap, of } from 'rxjs';
import { usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})

export class ServiceRestService {

  http = inject(HttpClient)

  URL: string = 'http://localhost:8100';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

  };
        //            GET             //
  getLista(): Observable<usuario[]>{
    return this.http.get<usuario[]>(this.URL + '/user').pipe(
      tap((usuario)=> console.log('Usuarios obtenidos')),
      catchError(this.handleError<usuario[]>('getLista', []))
    );
  }
        //            MANEJO DE ERRORES             //
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }
}
