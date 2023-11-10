import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('sesionStart');
    localStorage.removeItem('tipoUser');
    localStorage.removeItem('email');
    localStorage.removeItem('nombre');
    this.router.navigate(['/auth']);
  }

}
