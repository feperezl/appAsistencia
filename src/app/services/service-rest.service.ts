import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, tap, of } from 'rxjs';
import { Clase } from '../clases/clase';


@Injectable({
  providedIn: 'root'
})

// 
export class ServiceRestService {

  http = inject(HttpClient)

  URL: string = 'http://localhost:8100';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

  };
        //            GET     -      OBTENER        //
getLista(): Observable<Clase[]> {
  return this.http.get<Clase[]>(this.URL + '/clase').pipe(
    tap((clases) => console.log('Clases obtenidas')),
    catchError(this.handleError<Clase[]>('getLista', []))
  );
}

          //            ADD       -      AGREGAR      //
  addClase(clase: Clase): Observable<any>{
    return this.http.post<Clase>(this.URL + '/clase', clase, this.httpHeader)
    .pipe(catchError(this.handleError<Clase>('addClase')));
  }
          //            UPDATE       -     ACTUALIZAR      //
  updateClase(id: any, clase: Clase): Observable<any>{
    return this.http.put(this.URL + '/clase/' + id, clase, this.httpHeader).pipe(
      tap(_ => console.log('Clase actualizada: ${id}')),
      catchError(this.handleError<any>('updateClase'))
    )
  }

          //            UPDATE       -     ACTUALIZAR      //
  getClase(id: any): Observable<Clase>{
    return this.http.get<Clase>(this.URL + '/clase/' + id).pipe(
      tap(_ => console.log('Clase obtenida: ${id}')),
      catchError(this.handleError<Clase>('getClaseId'))
    )
  }
        //            GET ID       -     OBTENER POR ID      //
  getClaseId(id: any): Observable<Clase[]>{
    return this.http.get<Clase[]>(this.URL + '/clase/' + id).pipe(
      tap(_ => console.log('Clase fetched: ${id}')),
      catchError(this.handleError<Clase[]>('getClase id=${id}'))

    )
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
