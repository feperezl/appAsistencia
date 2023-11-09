import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './templates/layout/layout-page/layout-page.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
