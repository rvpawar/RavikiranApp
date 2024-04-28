import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
//import { AboutusComponent } from './../../';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../../modules/home/home.component';
import { routes } from '../../app.routes';


@NgModule({
  declarations: [    
    DefaultComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule ,
    SharedModule 
    //RouterModule.forRoot(routes),     
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
 