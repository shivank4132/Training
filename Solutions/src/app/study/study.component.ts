import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  newForm:FormGroup;


  constructor() { }

  ngOnInit() {
  this.newForm=new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  })
  }

  save(){
    console.log(this.newForm);  
  }

}
