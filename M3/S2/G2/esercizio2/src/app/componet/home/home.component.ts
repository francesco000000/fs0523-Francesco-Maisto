import { Component } from '@angular/core';
import { Ipost } from '../../ipost';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  post:Ipost[]=[]
  constructor(private postSvc:PostService){}
  ngOnInit(){
    this.post = this.postSvc.post
  }
}
