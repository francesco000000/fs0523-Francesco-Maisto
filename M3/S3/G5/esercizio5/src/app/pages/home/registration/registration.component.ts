import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { Iregistration } from '../Model/iregistration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
constructor( private homeSvc:HomeService, private router:Router){}
registerData:Iregistration = {
  email: '',
  password: '',
  nome: ''
}


save(){
  this.homeSvc.signUp(this.registerData)
  .subscribe(data => {
      this.router.navigate(['/home/login'])
  })
}

}
