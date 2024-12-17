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
          <li><a href="#">Home</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Cab Cancellation</a></li>
          <li><a href="#">Updates</a></li>
        </ul>
      </nav>
      <div class="divider"></div>
      <nav>
        <ul class="nav-links">
          <li><a href="#">settings</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
        </nav>
    </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
