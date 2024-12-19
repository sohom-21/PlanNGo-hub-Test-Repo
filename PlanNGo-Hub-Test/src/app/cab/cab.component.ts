import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
import { CabCardDetails } from '../cabcards/cabcard-details';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SearchbarModule } from "../searchbar/searchbar.module";
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
  cabCardDetailsList: CabCardDetails[] = [{
    rideType: 'SUV CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'SUV CAB 3',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Sedan CAB 2',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'VAN 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Luxury CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  ];
}
