import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoLogeadoGuard } from './no-logeado.guard';
import { PageProtectedGuard } from './guards/page-protected.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate : [PageProtectedGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate : [NoLogeadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate : [NoLogeadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NoLogeadoGuard]
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule),
<<<<<<< HEAD
    canActivate : [PageProtectedGuard]
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
=======
    canActivate : [LogeadoGuard]
  },
  {
    path: 'registro-clase',
    loadChildren: () => import('./pages/registro-clase/registro-clase.module').then( m => m.RegistroClasePageModule)
>>>>>>> 88000a2f76fc7a954f1d476ed0ab4cf5ce280d75
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
