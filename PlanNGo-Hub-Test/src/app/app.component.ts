import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarModule } from './searchbar/searchbar.module';
import { FooterComponent } from './footer/footer.component';
import { CabComponent } from './cab/cab.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    SearchbarModule,
    FooterComponent,
    CabComponent],
  template: `<main>
  <app-navbar></app-navbar>
  <app-searchbar></app-searchbar>
  <app-cab></app-cab>
  <app-sidebar></app-sidebar>
  <section class="content">
    </section>
    <app-footer></app-footer>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlanNGo-Hub-Test';
}
