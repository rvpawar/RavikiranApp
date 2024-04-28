import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn : 'root'
})
export class DailyRegisterService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:5000';
    }
    
    getDailyRegisterData(schoolDivisionID:number,year:any ,month:any): Observable<any> {

        console.log('In service : ID =' + schoolDivisionID + ' Month -' +month)
        return this.http.get<any>(`${this.url}/api/dailyregister/${schoolDivisionID}/${year}/${month}`);

    }
}