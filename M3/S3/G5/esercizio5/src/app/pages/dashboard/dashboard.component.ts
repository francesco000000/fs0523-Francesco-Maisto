import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { DashboardService } from './dashboard.service';
import { Iuser } from '../home/Model/iuser';
import { NgForm } from '@angular/forms';
import { Icity } from '../Model/icity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
city:any





constructor(private router:Router,private homeSvc:HomeService,private http:HttpClient){}

onSubmit(homeForm:NgForm){

 this.homeSvc.getAll(homeForm.value.nomeCitta)
 .subscribe(data=>this.city=data)







}
ext(){
   this.homeSvc.logout()
}



}




