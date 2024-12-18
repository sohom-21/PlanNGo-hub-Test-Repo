import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
import { CabCardDetails } from '../cabcards/cabcard-details'; 
@Component({
  selector: 'app-cab',
  standalone: true,
  imports: [CommonModule,
     CabcardsComponent,
    ],
  
  template: `
      <app-cabcards [cabCardDetails]="cabCardDetails"></app-cabcards>
  `,
  styleUrl: './cab.component.css'
})
export class CabComponent {
   cabCardDetails:CabCardDetails = {
    rideType: 'SUV CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 100,
    available: true
   };
}
