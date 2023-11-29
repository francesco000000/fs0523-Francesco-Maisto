import { Component, Input } from '@angular/core';
import { Ipost } from '../../ipost';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
   newPost:Ipost = {
    id:0,
    titolo:"",
    body:"",
    active:true,
    type:""

  }
}
