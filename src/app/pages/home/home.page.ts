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

  clase: any = {
    id: null,
    nombre: "",
    asignatura: "",
    fecha: "",
    qr: ""
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


  
  // LIMPIAR CLASES //
  limpiarClase() {
    this.clase.id = null;
    this.clase.nombre = "";
    this.clase.asignatura = "";
    this.clase.fecha = "";
    this.clase.qr = "";
  }

  cerrarSesion() {
    localStorage.removeItem('logeado');
    this.router.navigate(['/inicio']);
  }
}