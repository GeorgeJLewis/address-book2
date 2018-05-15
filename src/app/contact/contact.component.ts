import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor() {
    this.contact = {
      name: 'raoul',
      email: 'jhkjh"khkjh.com',
      company: 'Craft Academy',
      role: 'Coach',
      twitter: 'diraulo',
      location: 'Pretoria',
      notes: 'Blah blah blah',
      image: 'https://avavtars2.githubusercontent.com/u/4028374?s=40&'
    }
  }

  ngOnInit() {
  }

}
