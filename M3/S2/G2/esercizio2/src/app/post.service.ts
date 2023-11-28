import { Injectable } from '@angular/core';
import { Ipost } from './ipost';
@Injectable({
  providedIn: 'root'
})
export class PostService {
   post:Ipost[]=[
    {
  id:0,
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  title:"Titolo",
  active:true
},
{
  id:0,
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  title:"Titolo",
  active:true
},
{
  id:0,
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  title:"Titolo",
  active:false
},
{
  id:0,
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  title:"Titolo",
  active:true
},
{
  id:0,
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  title:"Titolo",
  active:false
}
]
constructor(){}
getActivePost(){
  return this.post.filter(p => p.active)
}
getInactivePost(){
  return this.post.filter(p => !p.active)
}
}
