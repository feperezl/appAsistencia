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
    this.clase.id = null;
    this.clase.nombre = "";
    this.clase.asignatura = "";
    this.clase.fecha = "";
    this.clase.qr = "";
  }
  // AGREGAR CLASES //
  addClase() {
    if (this.clase.nombre === "" || this.clase.asignatura === "" || this.clase.fecha === "") {
      this.presentToast({
        message: 'Debe llenar todos los campos',
        duration: 2000,
        position: 'middle',
        icon: 'warning'
      });
      return;
    } else {
      this.api.addClase(this.clase).subscribe({
        next: () => {
          console.log("Clase agregada: " + this.clase);
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
      this.clase = data;
    }
  )}

  cerrarSesion() {
    localStorage.removeItem('logeado');
    this.router.navigate(['/inicio']);
  }
}