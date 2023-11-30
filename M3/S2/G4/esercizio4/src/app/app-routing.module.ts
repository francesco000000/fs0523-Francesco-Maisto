import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { AttiviComponent } from './pagine/attivi/attivi.component';
import { DettaglioComponent } from './pagine/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo : '/dettaglio'
  },
  {
    path:'attivi',
    component: AttiviComponent
  },
  {
     path:'attivi/dettaglio/:id',
     component:DettaglioComponent
  },
  {
    path:'inattivi',
    component: AttiviComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
