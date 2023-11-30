import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagine/home/home.component';
import { AttiviComponent } from './pagine/attivi/attivi.component';
import { InattiviComponent } from './pagine/inattivi/inattivi.component';
import { HeaderComponent } from './componenti/header/header.component';
import { CardComponent } from './componenti/card/card.component';
import { EvidenziaDirective } from './evidenzia.directive';
import { DettaglioComponent } from './pagine/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttiviComponent,
    InattiviComponent,
    HeaderComponent,
    CardComponent,
    EvidenziaDirective,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
