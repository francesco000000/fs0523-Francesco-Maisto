import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagine/home/home.component';
import { PostattiviComponent } from './pagine/postattivi/postattivi.component';
import { PostnonattiviComponent } from './pagine/postnonattivi/postnonattivi.component';
import { FormComponent } from './componenti/form/form.component';
import { TabellaComponent } from './componenti/tabella/tabella.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostattiviComponent,
    PostnonattiviComponent,
    FormComponent,
    TabellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
