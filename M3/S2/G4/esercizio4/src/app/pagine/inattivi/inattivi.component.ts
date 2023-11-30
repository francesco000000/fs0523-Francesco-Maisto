import { Component } from '@angular/core';
import { Ipost } from '../../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrl: './inattivi.component.scss'
})
export class InattiviComponent {
  postArr:Ipost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.updatePosts()
  }

  updatePosts(){
    this.postArr = this.postSvc.getInactivePosts()
  }

  toggleStatus(post:Ipost){
    this.postSvc.toggleActive(post)
    this.updatePosts()
  }

}
