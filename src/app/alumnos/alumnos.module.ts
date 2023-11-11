import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { LayoutComponent } from './templates/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClasesComponent } from './pages/clases/clases.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ClasesComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AlumnosModule { }
