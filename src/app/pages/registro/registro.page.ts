import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) { 
    this.registroForm = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'password-valid': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    // Your code here
  }
  

  async registrar(){
    if (this.registroForm.invalid) {
      const alert = await this.alertController.create({
        header: 'Error de registro',
        message: 'Por favor, rellene todos los campos.',
        buttons: ['Reintentar']
      });

      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        header: 'Registro completado',
        buttons: ['Rediriendo a la página de inicio']
      });
      this.navCtrl.navigateRoot('inicio');
      await alert.present();

}}}
