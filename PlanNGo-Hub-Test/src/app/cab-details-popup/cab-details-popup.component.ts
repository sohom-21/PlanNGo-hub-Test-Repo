// src/app/cab-details-popup/cab-details-popup.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabCardDetails } from '../cabcards/cabcard-details';

@Component({
  selector: 'app-cab-details-popup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popup-overlay" (click)="onClose()">
      <div class="popup-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="onClose()">×</button>
        <h2>Cab Details</h2>
        <div class="cab-info">
          <p><strong>Ride Type:</strong> {{cabDetails.rideType}}</p>
          <p><strong>Pickup:</strong> {{cabDetails.pickupLocation}}</p>
          <p><strong>Dropoff:</strong> {{cabDetails.dropoffLocation}}</p>
          <p><strong>Time:</strong> {{cabDetails.time}}</p>
          <p><strong>Price:</strong> ₹{{cabDetails.price}}</p>
          <p><strong>Status:</strong> {{cabDetails.available ? 'Available' : 'Not Available'}}</p>
        </div>
        <div class="action-buttons">
          <button class="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  `,
 styleUrl: './cab-details-popup.component.css'
})
export class CabDetailsPopupComponent {
  @Input() cabDetails!: CabCardDetails;
  @Input() onClose!: () => void;
}
