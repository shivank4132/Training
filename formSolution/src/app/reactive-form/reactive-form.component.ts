import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    form:FormGroup;

    allSet=false;

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,[Validators.minLength(8),Validators.required]),
      gender:new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      file:new FormControl(null,Validators.required)
    });
  }

  submit(){
    this.allSet=true;
  }

}
