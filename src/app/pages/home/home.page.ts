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

  usuarios: any;

  constructor(private activateRouter: ActivatedRoute, private router: Router, 
    private api: ServiceRestService, private toastController: ToastController ) {
    this.activateRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data)
      } else {
        this.router.navigate(['/login']);
      }
      
  });

}

  ionViewDidEnter(){
    this.getLista();
  }


  getLista(){
    this.api.getLista().subscribe((data) => {
      console.log(data);
      this.usuarios = data;
    })
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.router.navigate(['/inicio']);
}}