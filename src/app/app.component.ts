import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  this.appName = 'AddressBook2';
  className = 'custom-class';

  clickHandler() {
    console.log('Submit button was clicked');
  }
}
