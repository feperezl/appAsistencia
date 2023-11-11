import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {

  idUser = localStorage.getItem('idUser'); // Obtiene el id del usuario que está logueado
  idUserNumber = parseInt(this.idUser, 10); // Convierte el valor a un número entero


 clases: any[]; // Define una variable para almacenar las clases

  constructor(private clasesService: ClasesService, private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    this.clasesService.buscarClasesCreadas().subscribe(
      (data) => {
        this.clases = data; // Almacena los datos en la variable "clases"
      },
      (error) => {
        console.error('Error al buscar las clases:', error);
      }
    );
  }

  ingresarAClase(idClase: string) {
    this.asistenciaService.crearAsistencia(this.idUserNumber, idClase).subscribe(
      (data) => {
        console.log('Asistencia creada:', data);
        alert('Entraste a la clase');
      },
      (error) => {
        console.error('Error al crear la asistencia:', error);
      }
    );
  }

  buscarAsistencia(idClase: string) {
    this.asistenciaService.buscarAsistencia(this.idUserNumber, idClase).subscribe(
      (data) => {
        console.log('Asistencia encontrada:', data);
        if (data.length > 0) {
          alert('Ya estás dentro de la clase');
        } else {
          this.ingresarAClase(idClase);
        }
      },
      (error) => {
        console.error('Error al buscar la asistencia:', error);
      }
    );
  }

}
