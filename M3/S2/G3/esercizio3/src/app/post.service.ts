import { Injectable } from '@angular/core';
import { Ipost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Ipost[] = [
    {
      id:0,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:true,
      type:'news'
    },
    {
      id:1,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:true,
      type:'news'
    },
    {
      id:2,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:false,
      type:'politic'
    },
    {
      id:3,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:true,
      type:'education'
    },
    {
      id:4,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:true,
      type:'news'
    },
    {
      id:5,
      titolo:'titolo',
      body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      active:false,
      type:'education'
    }
  ];

  constructor() { }

  getActivePizzas(){
    return this.posts.filter(p => p.active)
  }

  getInactivePizzas(){
    return this.posts.filter(p => !p.active)
  }

}

