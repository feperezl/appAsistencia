import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceRestService } from 'src/app/services/service-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;

  clases: any;

  alumno: any = {
  }

  presentToast: any;

  constructor(private activateRouter: ActivatedRoute, private router: Router,
    private api: ServiceRestService, private toastController: ToastController) {
    this.activateRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data)
      } else {
        this.router.navigate(['/login']);
      }

    });

  }

  ionViewDidEnter() {
    this.getLista();
    this.limpiarClase();
  }
  
  // OBTENER CLASES //
  getLista() {
    this.api.getLista().subscribe((data) => {
      console.log(data);
      this.clases = data;
    })
  }
  
  // LIMPIAR CLASES //
  limpiarClase() {
    this.alumno.id = null;
    this.alumno.nombre = "";
    this.alumno.asignatura = "";
    this.alumno.fecha = "";
    this.alumno.qr = "";
  }
  // AGREGAR CLASES //
  addClase() {
    if (this.alumno.nombre === "" || this.alumno.asignatura === "" || this.alumno.fecha === "") {
      this.presentToast({
        message: 'Debe llenar todos los campos',
        duration: 2000,
        position: 'middle',
        icon: 'warning'
      });
      return;
    } else {
      this.api.addClase(this.alumno).subscribe({
        next: () => {
          console.log("Clase agregada: " + this.alumno);
          this.presentToast({
            message: 'Clase creada ',
            duration: 2000,
            position: 'middle',
            icon: 'checkmark-circle-outline'
          });
          this.getLista();
          this.limpiarClase();
        }
      });
    }
  }
  
  // GET CLASES //

  getClaseId(id: any) {
    this.api.getClaseId(id).subscribe((data) => {
      console.log(data);
      this.alumno = data;
    }
  )}

  cerrarSesion() {
    localStorage.removeItem('logeado');
    this.router.navigate(['/inicio']);
  }

  registrar() {
    this.router.navigate(['/registro-clase']);
  }
}