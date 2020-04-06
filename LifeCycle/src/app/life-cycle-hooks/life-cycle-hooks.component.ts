import { Component, OnInit, OnChanges,
  SimpleChanges,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements 
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {



  constructor() {
     
  }

  ngOnInit() {
      console.log("ngOnInit called");
  }



  ngDoCheck() {
      console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
      console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() {
      console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
      console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked() {
      console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
      console.log("ngOnDestroy called");
  }
}