import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
 <aside class="sidebar">
      <div class="sidebar-comp">
      </div>
      <nav>
        <ul class="nav-links">
          <li>
            <img src="/assets/house-solid.svg" alt="">
            <a href="#">Cab Search</a>
          </li>
          <li>
          <img src="/assets/clock-rotate-left-solid.svg" alt="">
            <a href="#">History</a>
          </li>
          <li>
          <img src="/assets/comment-slash-solid.svg" alt="">
            <a href="#">Cab Cancellation</a>
          </li>
          <li>
          <img src="/assets/car-side-solid.svg" alt="">
            <a href="#">Updates</a>
          </li>
        </ul>
      </nav>
      <div class="divider"></div>
      <nav>
        <ul class="nav-links">
          <li>
            <img src="/assets/gear-solid.svg" alt="">
            <a href="#">settings</a>
          </li>
        </ul>
        <ul class="nav-links">
          <li>
            <img src="/assets/helicopter-symbol-solid.svg" alt="">
            <a href="#">Help Center</a>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
