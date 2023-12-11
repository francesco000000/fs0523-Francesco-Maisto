import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../model/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
constructor(private todoSvc:TodosService,private route: ActivatedRoute,){}
newTodo:Partial<Todo>={
  completed:false
}
todos:Todo[]=[];
todo!:Todo
loading:boolean = false;
show:boolean=false

ngOnInit(){
  this.todoSvc.getAll().then(todos => this.todos=todos.filter(t => !t.completed))


}
add(){
  this.loading=true
  this.todoSvc.create(this.newTodo).then(res =>{
    this.loading=false
    this.newTodo={
      completed:false

    }

  }).then(res =>{
    this.todoSvc.getAll().then(todos => this.todos=todos.filter(t => !t.completed))
  })
}
remuve(id:string|undefined){
  if(!id) return //blocca la funzione

  this.todoSvc.delete(id).then(res => {

    this.todos =  this.todos.filter(t => t.id != id);


  })
}
completo(){
  this.route.params.subscribe((params:any) => {

    this.todoSvc.getById(params.id).then(res => this.todo = res)
    .then(res => this.todo.completed=true)

  })
}

}


