import { Injectable } from '@angular/core';
import { Ipost } from './ipost';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts:Ipost[] = [
    {
      id: 1,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "news",
      active: true,
      autore:"Autore"
    },
    {
      id: 2,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "politic",
      active: false,
      autore:"Autore"
    },
    {
      id: 5,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "politic",
      active: true,
      autore:"Autore"
    },
    {
      id: 6,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "politic",
      active: true,
      autore:"Autore"
    }
  ];


  getAll(){
    return this.posts
  }

  getActivePosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }

  toggleActive(post:Ipost){
    let index = this.posts.findIndex(p => p.id == post.id)
    post.active = !post.active;
    this.posts.splice(index,1,post)
  }

  toggleActiveMap(post:Ipost){
    this.posts = this.posts.map(p => {
      if(p.id == post.id) p.active = !p.active;
      return p
    })
  }
}
