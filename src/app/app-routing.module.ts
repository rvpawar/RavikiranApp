import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FeeStructureComponent } from './modules/fee-structure/fee-structure.component';
import { StudentlistComponent } from './modules/studentlist/studentlist.component';
import { DailyregisterComponent } from './modules/dailyregister/dailyregister.component';
import { CashbookregisterComponent } from './modules/cashbookregister/cashbookregister.component';
import { CashbookcreditComponent } from './modules/cashbookregister/cashbookcredit/cashbookcredit.component';
import { CashbookdebitComponent } from './modules/cashbookregister/cashbookdebit/cashbookdebit.component';
import { GeneralLedgerComponent } from './modules/general-ledger/general-ledger.component';


const routes: Routes = [
    { path:'', component:DefaultComponent, children:[
        {  path: 'home', component: HomeComponent  },
        {  path: 'admin', component: AdminComponent},
        {  path: 'fee', component: FeeStructureComponent},
        {  path: 'student', component: StudentlistComponent},
        { path: 'dailyregister/:name', component: DailyregisterComponent},
        { path: 'cashbookregister/:name', component: CashbookregisterComponent},
        { path: 'cashbookcredit/:name', component: CashbookcreditComponent},
        { path: 'cashbookdebit/:name', component: CashbookdebitComponent},
        { path:'generalledger/:name', component:GeneralLedgerComponent}
    

      ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }