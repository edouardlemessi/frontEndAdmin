import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { ColorComponent } from './color/color.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AllUserComponent } from './all-user/all-user.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProduitComponent } from './produit/produit.component';
import { ProduitAddComponent } from './produit-add/produit-add.component';
import { AllCommComponent } from './all-comm/all-comm.component';
import { AddMComponent } from './add-m/add-m.component';
import { AllMComponent } from './all-m/all-m.component';
const routes : Routes = [
  {path: 'index', component: PrincipalComponent},
  {path: 'adduser/:userId', component: AdduserComponent}, 
  {path: 'adduser', component: AdduserComponent}, 
  {path: 'allcom', component: AllCommComponent}, 
  
  {path: 'addM', component: AddMComponent}, 
  {path: 'allM', component: AllMComponent},
  {path: 'addM/:matId', component: AddMComponent}, 
  {path: 'allM/:id', component: AllMComponent}, 

  {path: 'alluser', component: AllUserComponent},
  {path: 'alluser/:id', component: AllUserComponent},

  {path: 'addprod/:productId', component: ProduitAddComponent}, 
  {path: 'addprod', component: ProduitAddComponent}, 
  {path: 'allprod', component: ProduitComponent},
  {path: 'allprod/:id', component: ProduitComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    ColorComponent,
    SidebarComponent,
    AdduserComponent,
    AllUserComponent,
    ProduitComponent,
    ProduitAddComponent,
    AllCommComponent,
    AddMComponent,
    AllMComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

