import { Component, NgModule } from '@angular/core';
type formObj = {
  email:string
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  emailRegEx = "[a-z]{2,15}@[a-z]{2,15}.[a-z]{2,7}"

 visible:boolean=true
 complit:boolean=true

  formObj:formObj = {
    email : '',
    password : ''
  }
  save(){
    if (this.formObj.email==""||this.formObj.password=="") {
      this.complit=false
      this.visible=true

    }else{
      this.visible=false
      this.complit=true
      this.formObj.email=""
      this.formObj.password=""}

   }



  }

