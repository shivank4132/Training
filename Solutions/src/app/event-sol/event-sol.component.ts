import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-sol',
  templateUrl: './event-sol.component.html',
  styleUrls: ['./event-sol.component.css']
})
export class EventSolComponent implements OnInit {


  myClickFunction(event) { 
    alert("Button is clicked");
    console.log(event.type);
 }

 myKeyUpFunction(event){
   console.log(event.type);
 }

@Input() data:string;

@Output() valueChange= new EventEmitter();

counter=0;

valueChangeFunction(){
  this.counter=this.counter+1;
  this.valueChange.emit(this.counter);

}

  constructor() { }

  ngOnInit() {
  }

}
