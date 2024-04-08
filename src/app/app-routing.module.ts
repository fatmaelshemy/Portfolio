import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Componts/about/about.component';
import { ContactusComponent } from './Componts/contactus/contactus.component';
import { PORTFOLIOComponent } from './Componts/portfolio/portfolio.component';
import { AllhomeComponent } from './Componts/allhome/allhome.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AllhomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactusComponent},
  {path:'PORTFOLIO',component:PORTFOLIOComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
