import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  user={
    usuario: "",
    password: ""
  }

  constructor(public fb: FormBuilder, public navCtrl: NavController, public alertController: AlertController, private router: Router, private storage: Storage) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }

   ngOnInit() {

  }

  async login(){

    localStorage.setItem('logeado', 'true');

    let formulario = this.formularioLogin.value;

    if (formulario.nombre == "" || formulario.password == "") {
      const alert = await this.alertController.create({
        header: 'Error de login',
        message: 'Por favor, rellene todos los campos.',
        buttons: ['Reintentar']
      });

      await alert.present();
      return;

    }

    let navigationExtras : NavigationExtras= {
      state:{
        user: this.user.usuario
      }
    }
    
    this.router.navigate(['/home'], navigationExtras);

  }
}