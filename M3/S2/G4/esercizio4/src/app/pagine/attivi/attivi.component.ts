import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Ipost } from '../../ipost';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrl: './attivi.component.scss'
})
export class AttiviComponent {
  postArr:Ipost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.updatePosts()
  }

  updatePosts(){
    this.postArr = this.postSvc.getActivePosts()
  }

  toggleStatus(post:Ipost){
    this.postSvc.toggleActive(post)
    this.updatePosts()
  }

}
