import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
import { CabCardDetails } from '../cabcards/cabcard-details';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SearchbarModule } from "../searchbar/searchbar.module";
import { CabService } from '../cab.service';
@Component({
  selector: 'app-cab',
  standalone: true,
  imports: [CommonModule,
    CabcardsComponent, SidebarComponent, SearchbarModule],

  template: `
  <div class="cabcard-container">
    <app-sidebar></app-sidebar>
     <div>
      <app-searchbar></app-searchbar>
      <div class="cabcards-only">
        <app-cabcards
        *ngFor="let cabCardDetails of cabCardDetailsList"
        [cabCardDetails]="cabCardDetails">
      </app-cabcards>
    </div>
  </div>
  </div>
  `,
  styleUrl: './cab.component.css'
})
export class CabComponent {
  cabCardDetailsList: CabCardDetails[] = [];
  cabservice: CabService = inject(CabService);
  constructor() {
    this.cabCardDetailsList = this.cabservice.getcabCardDetailsList();
  }
}
