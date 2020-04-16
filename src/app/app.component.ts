import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `<product-component></product-component>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'First Component';  
}
