import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {
generi:string[]=[
  'uomo',
  'donna',
  'bho'
]
form!:FormGroup;
constructor(private fb: FormBuilder){}
ngOnInit(){
  this.form=this.fb.group({
    nome: this.fb.control(null,[Validators.required]),
    cognome: this.fb.control(null,[Validators.required]),
    password: this.fb.control(null,[Validators.required]),
    conferma: this.fb.control(null,[Validators.required]),
    genere: this.fb.control(null,[Validators.required]),
    url: this.fb.control(null,[Validators.required]),
    textarea: this.fb.control(null,[Validators.required]),
    username: this.fb.control(null,[Validators.required]),
  })
}
send(){
  console.log(this.form);

}

}
