import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource,MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
//import{MatTableExporterDirective} from '@angular/material-table-exporter';
import { DatePipe } from '@angular/common';

import { DailyRegisterModel } from './../../models/dailyregister-model';
import { DailyRegisterService } from './../../services/dailyregister-service';
import { ExcelService } from './../../services/excel-service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any) = pdfFonts.pdfMake.vfs;

declare var $: any;

@Component({
  selector: 'app-dailyregister',
  //  standalone: true,
  //  imports: [ReactiveFormsModule,MatTable,DatePipe,NgFor],
  templateUrl: './dailyregister.component.html',
  styleUrls: ['./dailyregister.component.css']
})
export class DailyregisterComponent implements OnInit {

  dailyRegisterForm: FormGroup;
  schoolDivisionName: any;
  schoolDivisionID: number | undefined;
  dailyregister: DailyRegisterModel;
  dailyregisters: Array<DailyRegisterModel>;
  dailyregisterHeader: Array<string>;
  //displayColumns: Array<string>;
  displayedColumns: Array<string>;
  dataSource = new MatTableDataSource();

  TotalSum: any;
  totalAdmissionFee: any;
  totalTuitionFee: any;
  totalTermFee: any;
  totalStationaryFee: any;
  totalComputerFee: any;
  totalFee: any;

  years: number[] = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  year: number = 2019;
  months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month: any = 'January';
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
exporter: any;

  // dataForExcel = [];
  // registerData = [];


  constructor(private serv: DailyRegisterService, private _router: ActivatedRoute, private xlServ: ExcelService) {
    this.dailyregister = new DailyRegisterModel('', 0, '', '', 0, 0, 0, 0, 0, 0),
      this.dailyregisters = new Array<DailyRegisterModel>();
    this.dailyregisterHeader = new Array<string>();
    //this.dataSource =null;
    this.displayedColumns = ['Date', 'reciept_no', 'student_name', 'standard', 'admission_fee', 'monthly_fee', 'term_fee', 'stationary_fee', 'computer_fee', 'total_fee'];

    this.dailyRegisterForm = new FormGroup({
      selYear: new FormControl(),
      selMonth: new FormControl()
    });

  }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      var _name = params.get('name');
      this.schoolDivisionName = _name;
    })

    for (let dr in this.dailyregister) {
      this.dailyregisterHeader.push(dr);
    }
    this.getDailyRegisterData(this.schoolDivisionName, this.year, this.month);
  }


  getDailyRegisterData(schoolDivisionName: string, year: number, month: any): void {


    if (schoolDivisionName == 'Pre Primary') {
      this.schoolDivisionID = 1;
    } else if (schoolDivisionName == 'Primary') {
      this.schoolDivisionID = 2;
    } else {
      this.schoolDivisionID = 3;
    }

    this.serv.getDailyRegisterData(this.schoolDivisionID, year, month).subscribe((resp: any) => {
      this.dailyregisters = resp;
      console.log('data :' + JSON.stringify(resp));
      //this.registerData = resp;
      this.TotalSum = resp[1];
      this.totalTuitionFee = this.TotalSum[0]["totalTuitionFee"];
      this.totalAdmissionFee = this.TotalSum[0]["totalAdmissionFee"];
      this.totalTermFee = this.TotalSum[0]["totalTermFee"];
      this.totalStationaryFee = this.TotalSum[0]["totalStaionaryFee"];
      this.totalComputerFee = this.TotalSum[0]["totalComputerFee"];
      this.totalFee = this.TotalSum[0]["total"];
      this.dataSource = new MatTableDataSource(resp[0]);
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeMonth(e :any): void {
    console.log('val' + e.target.value);
    this.month = e.target.value;
    this.getDailyRegisterData(this.schoolDivisionName, this.year, this.month);
  }

  changeYear(e :any): void {
    //console.log('val' + e.target.value);
    this.year = e.target.value;
    this.getDailyRegisterData(this.schoolDivisionName, this.year, this.month);
  }

  // printPage(): void {
  //   window.print();
  // }

  // public downloadAsPDF() {
  //   const pdfTable = this.pdfTable.nativeElement;
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).download();
  // }

  // exportToExcel() {
  //   console.log("registerData : " + JSON.stringify(this.registerData));
  //  console.log("headers : " + Object.keys(this.registerData[0][0]));
  //   this.registerData[0].forEach((row: any) => {
  //     this.dataForExcel.push(Object.values(row))
  //   })

  //   let reportData = {
  //     title: 'Daily Register',
  //     data: this.dataForExcel,
  //     headers: Object.keys(this.registerData[0][0])
  //   }
  //   this.xlServ.exportExcel(reportData);
  // }
}
