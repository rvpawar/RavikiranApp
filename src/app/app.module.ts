import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './modules/admin/admin.component';
import { FeeStructureComponent } from './modules/fee-structure/fee-structure.component';
import { StudentlistComponent } from './modules/studentlist/studentlist.component';


import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from "@angular/material/input";
import { MatTableExporterModule } from "mat-table-exporter";
import { FileUploadModule } from 'ng2-file-upload';
import { DefaultModule } from './layout/default/default.module';
import { FullwidthModule } from './layout/fullwidth/fullwidth.module';
import { DailyregisterComponent } from './modules/dailyregister/dailyregister.component';
import { CashbookregisterComponent } from './modules/cashbookregister/cashbookregister.component';


@NgModule({
        imports: [
            BrowserModule,
            RouterModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            DefaultModule,   
            FullwidthModule,
            BrowserAnimationsModule,
            MatTableModule,
            MatSortModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableExporterModule,
            FileUploadModule,                 
                 
        ],  
        declarations: [
            AppComponent,
            AdminComponent,
            FeeStructureComponent,
            StudentlistComponent,
            DailyregisterComponent,
            CashbookregisterComponent

            
        ],
        providers: [],
        bootstrap: [AppComponent],
        schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    export class AppModule { }
   
