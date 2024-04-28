import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../../shared/shared.module';
//import { LoginComponent } from 'src/app/module/login/login.component';
//import { LoginregisterComponent } from 'src/app/module/loginregister/loginregister.component';



@NgModule({
  declarations: [
    
    //LoginComponent,
    //LoginregisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    FullwidthComponent
  ]
})
export class FullwidthModule { }
