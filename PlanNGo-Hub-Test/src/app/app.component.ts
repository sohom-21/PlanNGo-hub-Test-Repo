import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './cab/Components/navbar/navbar.component';
import { FooterComponent } from './cab/Components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <main>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PlanNGo-Hub-Test';
}
