import { Component } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {
  todos:Todo[]=[];
  constructor(private todoSvc:TodosService){}
  ngOnInit(){
    this.todoSvc.getupdateCompleto().then(todos => this.todos=todos.filter(t => t.completed))
  }


}
