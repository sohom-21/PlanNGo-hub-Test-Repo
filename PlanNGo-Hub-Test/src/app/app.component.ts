import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SidebarComponent],
  template: `<main>
  <app-navbar></app-navbar>
  <app-sidebar></app-sidebar>
  <section class="content">
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlanNGo-Hub-Test';
}
