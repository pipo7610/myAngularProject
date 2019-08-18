import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponenetComponent } from './my-first-componenet/my-first-componenet.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  {path:'appareil' , component: AppareilViewComponent},
  {path:'appareil/:id' , component: SingleAppareilComponent},
  {path:'auth' , component: AuthComponent},
  {path:'' , redirectTo:'/appareil' , pathMatch :'full'},
  {path:'introuvable' , component:ErrorComponent },
  {path:'**' , redirectTo:'/introuvable' }
];


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponenetComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService ,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
