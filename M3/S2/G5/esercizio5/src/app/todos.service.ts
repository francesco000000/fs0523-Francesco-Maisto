import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  apiUrl:string="http://localhost:3000/todos";



  getAll():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }
  create(todo:Partial<Todo>):Promise<Todo>{

    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }
  delete(id:string):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }
  getupdateCompleto():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }
  getById(id:string):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())

  }
}



