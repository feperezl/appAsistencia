import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroClasePage } from './registro-clase.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroClasePageRoutingModule {}
