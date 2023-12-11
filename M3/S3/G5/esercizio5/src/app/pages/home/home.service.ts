import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IaccessDate } from './Model/iaccess-date';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Iregistration } from './Model/iregistration';
import { environment } from '../../../environments/environment.development';
import { Ilogin } from './Model/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Icity } from './Model/icity';
import 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,  private router: Router){}
  registerUrl:string = environment.apiUrl + '/register';
  loginUrl:string = environment.apiUrl + '/login';
  authSubject = new BehaviorSubject<IaccessDate|null>(null);
  jwtHelper:JwtHelperService = new JwtHelperService()

  apiUrlCity:string=`http://api.openweathermap.org/data/2.5/forecast`

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  signUp(data:Iregistration):Observable<IaccessDate>{
    return this.http.post<IaccessDate>(this.registerUrl, data)
  }
  login(data:Ilogin):Observable<IaccessDate>{
    return this.http.post<IaccessDate>(this.loginUrl, data)
    .pipe(tap(data => {

      this.authSubject.next(data)
      localStorage.setItem('accessData',JSON.stringify(data))
      this.autoLogout(data.accessToken)


    }))

  }
  restoreUser(){

    const userJson:string|null =  localStorage.getItem('accessData');
    if(!userJson) return;

    const accessData:IaccessDate = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;


    this.authSubject.next(accessData)
    this.autoLogout(accessData.accessToken)
}
logout(){
  this.authSubject.next(null);
  localStorage.removeItem('accessData');
  this.router.navigate(['/home/login']);
}
autoLogout(jwt:string){
  const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
  const expMs = expDate.getTime() - new Date().getTime();

  setTimeout(()=>{
    this.logout()
  },expMs)
}
getAll(city:string):Observable<any>{

return this.http.get<any>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b2409d99f6ffbc519c531fead90c2396`)
.pipe(map(response=>response))



}
}

