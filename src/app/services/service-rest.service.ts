import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
=======

// 
>>>>>>> 88000a2f76fc7a954f1d476ed0ab4cf5ce280d75
export class ServiceRestService {

  private URL = 'https://fzidrkjsuztvrwrbfayn.supabase.co/rest/v1/'; 
  private KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWRya2pzdXp0dnJ3cmJmYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MDg0MjQsImV4cCI6MjAxNDI4NDQyNH0.RF7mns34JnVidp_BmKZDuIl_Z8xUDqkBr3fe2pfiZQE'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      apikey: this.KEY, 
    });
    return headers;
  }

  // buscar user x email
  login(correo: string): Observable<any> {
    const headers = this.getHeaders();
    const user = this.http.get(`${this.URL}user?correo=eq.${correo}`, { headers });
    return user;
  }
}