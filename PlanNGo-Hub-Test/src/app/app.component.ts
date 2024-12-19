import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CabComponent } from './cab/cab.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CabComponent],
  template: `<main>
  <app-navbar></app-navbar>
  <app-cab></app-cab>
  <section class="content">
    </section>
    <app-footer></app-footer>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlanNGo-Hub-Test';
}
