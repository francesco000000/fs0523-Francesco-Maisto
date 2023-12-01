import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pagine/todo/todo.component';
import { CompletatiComponent } from './pagine/completati/completati.component';

const routes: Routes = [
  {
    path:"",
    component:TodoComponent
  },
  {
    path:"completati",
    component:CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
