import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  ngOnInit() {
  }

  log(p) { console.log(p); }

  submitForm(form) {
    console.log(form);
  }
}
