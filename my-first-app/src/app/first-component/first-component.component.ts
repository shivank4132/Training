import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
 // styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  username:string=null;
  disablebutton:boolean=true;
  ngOnInit(): void {

  }
  
  update(){
    this.username=null;
    this.updatebool();
  }
  updatebool(){
    if(this.username==null || this.username==''){
      this.disablebutton=true;
    }
    else
    this.disablebutton=false;
  }
}
