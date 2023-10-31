import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ServiceRestService } from 'src/app/services/service-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController ) {
    this.formularioLogin = this.fb.group({
      "correo": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    });
  }

  ngOnInit() {

  }

  async login() {
    var f = this.formularioLogin.value;

    if(this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header : 'Datos incorrectos',
        message: 'Vuelve a a intentarlo',
        buttons: ['Volver']
      });

      await alert.present();
      return;
    }

    var usuario = {
      correo: f.correo,
      password: f.password
    }

    localStorage.setItem('correo',JSON.stringify(usuario));
  }
}
