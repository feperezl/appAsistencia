import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosModule),
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesores/profesores.module').then( m => m.ProfesoresModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
