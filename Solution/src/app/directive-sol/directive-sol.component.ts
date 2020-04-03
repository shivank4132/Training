import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-sol',
  templateUrl: './directive-sol.component.html',
  styleUrls: ['./directive-sol.component.css']
})
export class DirectiveSolComponent implements OnInit {

  show:boolean=true;

  numbers=['one','two','three','four','five'];

  name:string='ToTheNew';



  constructor() { }

  ngOnInit() {
  }

}
