import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
// import { createClient } from "@supabase/supabase-js";

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
  }
  
  // async registrar(){
  //   if (this.registroForm.invalid) {
  //     const alert = await this.alertController.create({
  //       header: 'Error de registro',
  //       message: 'Por favor, rellene todos los campos.',
  //       buttons: ['Reintentar']
  //     });

  //     await alert.present();
  //     return;
  //   } else {
  //     // Obten los datos del formulario
  //     const nombre = this.registroForm.get('nombre').value;
  //     const password = this.registroForm.get('password').value;
  //     const email = this.registroForm.get('email').value;

  //     // Realiza una solicitud para registrar un usuario
  //     const supabaseUrl = "https://vtnhgkporjjedvjyenvw.supabase.co";
  //     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bmhna3BvcmpqZWR2anllbnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyOTYxNDUsImV4cCI6MjAxMjg3MjE0NX0.PdqLFUFvsfslbCrVN0hH95W04X42_vDjjI5xkpkyrL4";
  //     const supabase = createClient(supabaseUrl, supabaseKey);

  //     const { data, error } = await supabase
  //       .from("alumno")
  //       .upsert([
  //         {
  //           nombre: nombre,
  //           password: password,
  //           email: email
  //         }
  //       ]);

  //     if (error) {
  //       console.error("Error al registrar el usuario:", error);
  //     } else {
  //       console.log("Usuario registrado:", data);
  //       const alert = await this.alertController.create({
  //         header: 'Registro completado',
  //         buttons: ['Redirigiendo a la página de inicio']
  //       });
  //       this.navCtrl.navigateRoot('inicio');
  //       await alert.present();
  //     }
  //   }
  // }
}
