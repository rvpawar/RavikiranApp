import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
        imports: [
            BrowserModule,
            RouterModule,      
            FormsModule,
            ReactiveFormsModule,
            AppRoutingModule           
                                  
                 
        ],  
        declarations: [
            AppComponent   
                 
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    export class AppModule { }
   
