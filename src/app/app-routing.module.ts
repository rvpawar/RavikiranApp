import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';

// Import your components here
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';

const routes: Routes = [
    { path:'', component:DefaultComponent, children:[
        {  path: 'home', component: HomeComponent  }
      ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }