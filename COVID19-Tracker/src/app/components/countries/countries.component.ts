import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe( 
      {                                       //Observer
        next :(result) => {                   //Observer value
          console.log(result);
          
        }
      }
    )
  }

}
