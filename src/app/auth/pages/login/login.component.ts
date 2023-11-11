import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  role: string;
  isMobile:boolean = false;
  sesionStart: string;

  private subscription: Subscription | undefined;

  constructor (
      private platform: Platform,
      private router: Router,
      private alertController: AlertController,
      private loadingCtrl: LoadingController,
      private _authService: AuthService,
      private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.isMobile = this.isMobileDevice();
    this._cdr.detectChanges();
  }

  typeUser() {
    this.sesionStart = localStorage.getItem('sesionStart');
    if (this.sesionStart) {
      this.role = localStorage.getItem('tipoUser');
      if (this.isMobileDevice()) {
        if (this.role === 'alumno') {
          this.router.navigate(['/alumno']);
        } else if (this.role === 'admin' || this.role === 'profesor') {
          this.deleteSesion();
          this.mostrarErrorAlert('Como administrador o profesor, debes acceder desde un ordenador.');
          return;
        }
      } else {
        if (this.role === 'alumno') {
          this.deleteSesion();
          this.mostrarErrorAlert('Como estudiante, debes acceder desde un dispositivo móvil.');
          return;
        } else if (this.role === 'admin' || this.role === 'profesor') {
          this.router.navigate(['/profesor']);
        }
      }
    }
  }

  async login(email: string, password: string) {
    if (!this.isValidEmail(email) || !this.isValidPassword(password)) {
      this.mostrarErrorAlert('Email no valido o contraseña no valida');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Conectando...',
    });

    await loading.present();

    this.subscription = this._authService.login(email).subscribe({
      next: (response: any) => {
        if (response.length !==0 && response[0].password === password) {
          localStorage.setItem('idUser', response[0].id);
          localStorage.setItem('email', response[0].correo);
          localStorage.setItem('nombre', response[0].nombre);
          localStorage.setItem('tipoUser', response[0].tipoUsuario);
          localStorage.setItem('sesionStart', 'sesionStart');
          
          this.typeUser();
          loading.dismiss();
        } else {
          this.mostrarErrorAlert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
          loading.dismiss();
        }
      },
    });
  }

  async mostrarErrorAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error de Credenciales',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

  isMobileDevice() {
    return this.platform.is('mobile');
  }

  deleteSesion() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('sesionStart');
    localStorage.removeItem('tipoUser');
    localStorage.removeItem('email');
    localStorage.removeItem('nombre');
  }

}
