import { PostService } from './post.service';
import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  constructor(private ref:ElementRef) { }
  @Input() colore!:string
  ngOnInit(){

    this.ref.nativeElement.style.color = this.colore;
  }
}
