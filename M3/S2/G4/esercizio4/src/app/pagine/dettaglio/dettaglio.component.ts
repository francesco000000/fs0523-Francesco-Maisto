import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Ipost } from '../../ipost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent {
post:Ipost[]=[]
constructor(private pizzaSvc:PostService, private router:Router){}

ngOnInit(){

}

}
