import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string='shivank mishra';
  date:Date=new Date(2020,3,7);
  str:string='r e v e r s e';


}
