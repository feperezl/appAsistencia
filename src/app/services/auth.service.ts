import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

 private URL = 'https://fzidrkjsuztvrwrbfayn.supabase.co/rest/v1/'; 
 private KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWRya2pzdXp0dnJ3cmJmYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MDg0MjQsImV4cCI6MjAxNDI4NDQyNH0.RF7mns34JnVidp_BmKZDuIl_Z8xUDqkBr3fe2pfiZQE'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      apikey: this.KEY, 
    });
    return headers;
  }

  login(correo: string): Observable<any> {
    const headers = this.getHeaders();
    const user = this.http.get(`${this.URL}user?correo=eq.${correo}`, { headers });
    return user;
  }


}