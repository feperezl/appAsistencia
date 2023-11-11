import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
