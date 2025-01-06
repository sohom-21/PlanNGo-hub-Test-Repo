import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `
 <aside class="sidebar">
      <div class="sidebar-comp">
      </div>
      <nav>
        <ul class="nav-links">
          <li>
            <img src="/assets/house-solid.png" alt="">
            <a routerLink="/" routerLinkActive="active" class="tc" >Search</a>
          </li>
          <li>
          <img src="/assets/clock-rotate-left-solid.png" alt="">
            <a  routerLink="/history" routerLinkActive="active">History</a>
          </li>
          <li>
          <img src="/assets/comment-slash-solidpng.png" alt="">
            <a routerLink="/cancellation" routerLinkActive="active">Cancel</a>
<!-- cab cancelation-->
          </li>
          <li>
          <img src="/assets/car-side-solid1.png" alt="">
            <a routerLink="/updates" routerLinkActive="active">Update</a>
          </li>
        </ul>
      </nav>
      <div class="divider"></div>
      <nav>
        <ul class="nav-links">
          <li>
            <img src="/assets/gear-solid.png" alt="">
            <a href="#">settings</a>
          </li>
        </ul>
        <ul class="nav-links">
          <li>
            <img src="/assets/helicopter-symbol-solid.png" alt="">
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
