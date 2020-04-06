import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string='Shabby';
  umar:number=23;

  displayCounter(count){
    console.log(count);
  }

}
