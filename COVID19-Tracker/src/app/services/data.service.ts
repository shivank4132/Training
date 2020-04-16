import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl="https://api.covid19api.com/countries";

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.dataUrl, {responseType:'text'}).pipe(
      map(result =>{
        
        return result;
      })
    );

  }
}
