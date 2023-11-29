import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ipost } from '../../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts:Ipost[] = [];

  constructor(private postSvc:PostService){}
  ngOnInit(){
    this.posts = this.postSvc.posts
  }

}
