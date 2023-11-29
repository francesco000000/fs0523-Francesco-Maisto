import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { PostattiviComponent } from './pagine/postattivi/postattivi.component';
import { PostnonattiviComponent } from './pagine/postnonattivi/postnonattivi.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'postattivi',
    component: PostattiviComponent
  },
  {
    path:'postnonattivi',
    component: PostnonattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
