import { Component } from '@angular/core';
import { ClasesService } from '../../../services/clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nombre_usuario = localStorage.getItem('nombre');

  clases: any[] = [
    { 
      nombre: 'Clase 1',
      profesor: 'Profesor A',
      imagen: 'https://miracomosehace.com/wp-content/uploads/2020/05/Persona-mano-movil-tiene-muchas-aplicaciones.jpg',
      asignatura: 'Aplicaciones Moviles',
      creando: false
    },
    { 
      nombre: 'Clase 2',
      profesor: 'Profesor B',
      imagen: 'https://static.vecteezy.com/system/resources/previews/005/283/061/non_2x/web-development-concept-in-3d-isometric-design-designer-works-with-code-interface-engineering-programming-settings-and-optimizes-pages-template-with-people-scene-illustration-for-webpage-vector.jpg',
      asignatura: 'Aplicaciones Web',
      creando: false
    },
    { 
      nombre: 'Clase 3',
      profesor: 'Profesor C',
      imagen: 'https://img.freepik.com/vector-premium/aprender-interfaz-ingles-aprender-idioma-concepto-educacion-infografia-escolar_212168-898.jpg?w=360',
      asignatura: 'Ingles',
      creando: false
    },
    { 
      nombre: 'Clase 4',
      profesor: 'Profesor D',
      imagen: 'https://i.ytimg.com/vi/A6qSsO2ROTM/maxresdefault.jpg',
      asignatura: 'Matematicas',
      creando: false
    },
  ];

  constructor(private clasesService: ClasesService) {}

  toggleClase(clase: any) {
    clase.creando = !clase.creando;
  }

  crearClase(clase: any) {
    if (!localStorage.getItem('claseStart')) {
      const idClase = this.generarCodigoAleatorio();
      this.clasesService.crearClase(idClase, clase.nombre, clase.profesor, clase.asignatura, 'creada')
        .subscribe((data: any) => {

            const claseStart = {
              _id: idClase,
              nombre: clase.nombre,
              profesor: clase.profesor,
              asignatura: clase.asignatura,
            };
            const dataAsString = JSON.stringify(claseStart);
            localStorage.setItem('claseStart', dataAsString);

          this.toggleClase(clase)
        }, (error: any) => {
          console.log(error);
        });
    } else {
      alert('Ya tienes una clase creada');
    }
  }

  finalizarClase() {
    if (localStorage.getItem('claseStart')) {
      const classInCourse = localStorage.getItem('claseStart');
      const classData = JSON.parse(classInCourse);
      this.clasesService.finalizarClase(classData._id)
        .subscribe((data: any) => {
          console.log(data);
          localStorage.removeItem('claseStart');
          alert('Clase finalizada con éxito');
        }, (error: any) => {
          console.log(error);
        });
    }
  }

  claseActiva(clase: any) {
    if (localStorage.getItem('claseStart')) {
      const classInCourse = localStorage.getItem('claseStart');
      const classData = JSON.parse(classInCourse);
      if (classData.nombre === clase.nombre &&  classData.asignatura === clase.asignatura) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  generarCodigoAleatorio() {
    // Obtén la fecha y hora actual
    const fechaActual = new Date();
    const fechaHora = fechaActual.toISOString().replace(/\D/g, '').slice(0, 14); // Elimina caracteres no numéricos

    // Genera 5 números aleatorios
    const numerosAleatorios = Math.random().toString().substring(2, 7);

    // Crea una cadena aleatoria de letras y números
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigoAleatorio = '';
    for (let i = 0; i < 3; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      codigoAleatorio += caracterAleatorio;
    }

    // Combina los elementos para obtener un código de 15 caracteres
    const codigoFinal = fechaHora + numerosAleatorios + codigoAleatorio;

    return codigoFinal;
  }

}
