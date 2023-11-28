import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostattiviComponent } from './component/postattivi/postattivi.component';
import { PostnonattiviComponent } from './component/postnonattivi/postnonattivi.component';
import { HomeComponent } from './componet/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostattiviComponent,
    PostnonattiviComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
