import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Componts/sidebar/sidebar.component';
import { HomeComponent } from './Componts/home/home.component';
import { FooterComponent } from './Componts/footer/footer.component';
import { NavbarComponent } from './Componts/navbar/navbar.component';
import { DetailsComponent } from './Componts/details/details.component';
import { PORTFOLIOComponent } from './Componts/portfolio/portfolio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

import { NgHighlightDirective } from './Componts/directives/ng-highlight.directive';
import { ContactusComponent } from './Componts/contactus/contactus.component';
import { AboutComponent } from './Componts/about/about.component';
import { AllhomeComponent } from './Componts/allhome/allhome.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    DetailsComponent,
    PORTFOLIOComponent,
    NgHighlightDirective,
    ContactusComponent,
    AboutComponent,
    AllhomeComponent,
    NotfoundComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
// @NgModule ({
//   imports: [
//     MatSlideToggleModule,
//   ]
// })
export class AppModule { }
