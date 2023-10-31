import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServiceRestService } from 'src/app/services/service-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: { correo: string; password: string } = { correo: '', password: '' };
  formularioLogin: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private serviceRestService: ServiceRestService
  ) {
    this.formularioLogin = new FormGroup({
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async login() {
    if (this.formularioLogin.valid) {
      const correo = this.formularioLogin.get('correo').value;
      const password = this.formularioLogin.get('password').value;

      this.serviceRestService.login(correo).subscribe(
        (response) => {
          if (response && response.token) {
            // El correo es válido, redirige a la página /home
            this.navCtrl.navigateRoot('/home');
          } else {
            console.log('Correo inválido. Por favor, inténtelo de nuevo.');
          }
        },
        (error) => {
          console.error('Error en la solicitud: ', error);
        }
      );
    } else {
      console.log('Por favor, rellene todos los campos del formulario.');
    }
  }
}
