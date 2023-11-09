import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServiceRestService } from 'src/app/services/service-rest.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;
  router: any;
  constructor(private serviceRestService: ServiceRestService, private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  buscarUsuarioPorCorreo(correo: string) {
    this.serviceRestService.login(correo).subscribe(
      (usuarioEncontrado) => {
        console.log('Usuario encontrado:', usuarioEncontrado);
        this.router.navigate(['/inicio']);
      },
      (error) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        console.error('Error al buscar usuario por correo:', error);
      }
    );
  }
}
