import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template:  `<product-component></product-component>`,
  template: `<div>
  <nav class= 'navbar navbar-default'>
      <div class= 'container-fluid'>
          <a class='navbar-brand'></a>
          <ul class='nav navbar-nav'>
          <li><a [routerLink] = "['/login']">Login</a></li>
          <li><a [routerLink] = "['/welcome']">Home</a></li>
          <li><a [routerLink] = "['/product']">Product List</a></li>                      
              
          </ul>
      </div>
  </nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div>

</div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'First Component';  
}
