import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NavigationStart, Router } from '@angular/router';

declare var cordova: any;

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {

  scannedResult: boolean = false;
  _id: string;
  nombre: string;
  profesor: string;
  asignatura: string;
  idUser = localStorage.getItem('idUser'); // Obtiene el id del usuario que está logueado
  idUserNumber = parseInt(this.idUser, 10); // Convierte el valor a un número entero


  clases: any[]; // Define una variable para almacenar las clases

  constructor(private clasesService: ClasesService, private asistenciaService: AsistenciaService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.stopScan();
      }
    });
  }

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
        this.router.navigate(['/alumno']);
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
          this.startScan();
        }
      },
      (error) => {
        console.error('Error al buscar la asistencia:', error);
      }
    );
  }

 async requestCameraPermission() {
    document.addEventListener('deviceready', () => {
      cordova.plugins.permissions.requestPermission(cordova.plugins.permissions.CAMERA,  (status: { hasPermission: any; }) => {
        if (status.hasPermission) {
          // El usuario concedió permiso para la cámara.
        } else {
          alert('No se ha concedido permiso para la cámara');
        }
      },  () => {
        alert('Error al solicitar permiso para la cámara');
      });
    });
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if(status.granted) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async startScan() {
    this.scannedResult = true;
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      const result = await BarcodeScanner.startScan();
      if(result?.hasContent) {

        const resultScan = JSON.parse(result.content);
        this._id = resultScan._id,
        this.nombre = resultScan.nombre,
        this.profesor = resultScan.profesor,
        this.asignatura = resultScan.asignatura,

        BarcodeScanner.showBackground();
        document.querySelector('body')?.classList.remove('scanner-active');
      }
    } catch (error) {
      console.error(error);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
  }


}
