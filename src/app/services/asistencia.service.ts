import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AsistenciaService {

 private URL = 'https://fzidrkjsuztvrwrbfayn.supabase.co/rest/v1/'; 
 private KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWRya2pzdXp0dnJ3cmJmYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MDg0MjQsImV4cCI6MjAxNDI4NDQyNH0.RF7mns34JnVidp_BmKZDuIl_Z8xUDqkBr3fe2pfiZQE'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      apikey: this.KEY, 
    });
    return headers;
  }

  crearAsistencia(idUser: number, idClase: string) {
    const headers = this.getHeaders();
    const body = {
      id_alumno: idUser,
      id_clase: idClase,
    }
    return this.http.post(`${this.URL}asistencia`, body, { headers });
  }

  buscarAsistencia(idUser: number, idClase: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.URL}asistencia?id_alumno=eq.${idUser}&id_clase=eq.${idClase}`, { headers });
  }


}