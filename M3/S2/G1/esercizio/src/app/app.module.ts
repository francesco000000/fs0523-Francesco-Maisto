import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { SottotitoloComponent } from './sottotitolo/sottotitolo.component';
import { Ciaocomp1Component } from './ciaocomp1/ciaocomp1.component';
import { CiaocompwComponent } from './ciaocomp1/ciaocompw/ciaocompw.component';
import { Ciaocomp2Component } from './ciaocomp2/ciaocomp2.component';
import { Comp2Component } from './ciaocomp2/comp2/comp2.component';
import { Comp3Component } from './ciaocomp2/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    SottotitoloComponent,
    Ciaocomp1Component,
    CiaocompwComponent,
    Ciaocomp2Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
