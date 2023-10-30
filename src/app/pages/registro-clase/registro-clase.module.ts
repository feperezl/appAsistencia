import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroClasePageRoutingModule } from './registro-clase-routing.module';

import { RegistroClasePage } from './registro-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroClasePageRoutingModule
  ],
  declarations: [RegistroClasePage]
})
export class RegistroClasePageModule {}
