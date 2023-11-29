import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Ipost } from '../../ipost';

@Component({
  selector: 'app-postnonattivi',
  templateUrl: './postnonattivi.component.html',
  styleUrl: './postnonattivi.component.scss'
})
export class PostnonattiviComponent {
  posts:Ipost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.posts = this.postSvc.getInactivePizzas()
  }
}
