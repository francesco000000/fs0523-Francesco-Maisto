import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Ilogin } from '../Model/ilogin';
import { DashboardService } from '../../dashboard/dashboard.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(   private homeSvc:HomeService, private router:Router,private http:HttpClient){}

loginData:Ilogin = {
  email: '',
  password: ''
}










save(){
  this.homeSvc.login(this.loginData)
  .subscribe(data => {
      this.router.navigate(['/dashboard'])
  })
}
}
