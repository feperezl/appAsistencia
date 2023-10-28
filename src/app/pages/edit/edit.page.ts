import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceRestService } from 'src/app/services/service-rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  
  clase: any = {
    id: null,
    nombre: "",
    asignatura: "",
    fecha: "",
    qr: ""
  }
  
  constructor(private activateRouter: ActivatedRoute, private router: Router,
    private api: ServiceRestService, private toastController: ToastController) { }


  ngOnInit() {
  }

}
