import { Component } from '@angular/core';
import { Ipost } from '../../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-postattivi',
  templateUrl: './postattivi.component.html',
  styleUrl: './postattivi.component.scss'
})
export class PostattiviComponent {
  posts:Ipost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.posts = this.postSvc.getActivePizzas()
  }
}
