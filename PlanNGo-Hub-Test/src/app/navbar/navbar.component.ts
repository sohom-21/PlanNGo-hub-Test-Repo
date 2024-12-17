import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
  <div class="navbar-div">
     <nav class="navbar">
      <div>
        <img class="brand-logo" src="./assets/logo.svg" alt="logo" aria-hidden="true">
      </div>
      <div>
        <ul>
          <li>HOME</li>
          <li>HOTEL</li>
          <li>FLIGHT</li>
          <li>CAB</li>
          <li>TOUR</li>
        </ul>
      </div>
    </nav>
  </div>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
