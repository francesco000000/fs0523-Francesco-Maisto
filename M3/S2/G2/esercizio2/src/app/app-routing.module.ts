import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostattiviComponent } from './component/postattivi/postattivi.component';
import { PostnonattiviComponent } from './component/postnonattivi/postnonattivi.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './componet/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },

{
  path:'postattivi',
  component:PostattiviComponent
},
{
  path:'postnonattivi',
  component:PostnonattiviComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
