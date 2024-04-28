import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
//import { HomeComponent } from './../../modules/home/home.component';
//import { AboutusComponent } from './../../';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    
    //AboutusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule ,
    SharedModule ,
    DefaultComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
 