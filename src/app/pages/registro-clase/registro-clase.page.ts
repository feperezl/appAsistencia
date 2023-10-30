import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-clase',
  templateUrl: './registro-clase.page.html',
  styleUrls: ['./registro-clase.page.scss'],
})

export class RegistroClasePage implements OnInit {

  router: any;

  registros: any[] = [];

  // Variables 
  asignatura: string = "";
  seccion: string = "";
  carrera: string = "";
  profesor: string = "";

  constructor() { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.removeItem('logeado');
    this.router.navigate(['/inicio']);
  }

  registrar() {
    const nuevaEntrada = {
      asignatura: this.asignatura,
      seccion: this.seccion,
      carrera: this.carrera,
      profesor: this.profesor
    };
    this.registros.push(nuevaEntrada);
    this.limpiarCampos();
    console.log('Registros:', this.registros);
  }

  limpiarCampos() {
    this.asignatura = "";
    this.seccion = "";
    this.carrera = "";
    this.profesor = "";
  }
}
