import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './templates/layout/layout.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
