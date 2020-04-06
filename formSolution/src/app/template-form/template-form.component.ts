import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
    formData;

  constructor() { }
  formSubmit(form: NgForm) {
    this.formData = form.value;
}

  ngOnInit() {
  }

}
