import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ClasesService {

 private URL = 'https://fzidrkjsuztvrwrbfayn.supabase.co/rest/v1/'; 
 private KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWRya2pzdXp0dnJ3cmJmYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MDg0MjQsImV4cCI6MjAxNDI4NDQyNH0.RF7mns34JnVidp_BmKZDuIl_Z8xUDqkBr3fe2pfiZQE'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'apikey': this.KEY, 
    });
    return headers;
  }

  buscarClase(idClase: string): Observable<any> {
    const headers = this.getHeaders();
    const user = this.http.get(`${this.URL}clases?id_clase=eq.${idClase}`, { headers });
    return user;
  }

  buscarClasesCreadas(): Observable<any> {
    const headers = this.getHeaders();
    const user = this.http.get(`${this.URL}clases?estado=eq.creada`, { headers });
    return user;
  }

  buscarClases(): Observable<any> {
    const headers = this.getHeaders();
    const user = this.http.get(`${this.URL}clases`, { headers });
    return user;
  }

  crearClase(id_clase: string, nombre: string, profesor: string, asignatura: string, estado: string) {
    const headers = this.getHeaders();
    const body = {
      id_clase: id_clase,
      nombre,
      profesor: profesor,
      asignatura: asignatura,
      estado: estado
    }
    const user = this.http.post(`${this.URL}clases`, body, { headers });
    return user;
  }

  finalizarClase(id_clase: string): Observable<HttpErrorResponse | any> {
    const headers = this.getHeaders();
    const body = {
      estado: 'finalizada'
    }
    return this.http.patch(`${this.URL}clases?id_clase=eq.${id_clase}`, body, { headers });
  }


}