import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = 'Name';
  subject = 'Subject';
  password = 'Password';
  email = 'Email';

  constructor() { }

  ngOnInit() {
  }

}
