import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarModule } from './searchbar/searchbar.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SidebarComponent,SearchbarModule],
  template: `<main>
  <app-navbar></app-navbar>
  <app-sidebar></app-sidebar>
  <app-searchbar></app-searchbar>
  <section class="content">
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlanNGo-Hub-Test';
}
