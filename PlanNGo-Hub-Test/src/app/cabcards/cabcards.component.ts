import { Component, Input } from '@angular/core';
import { CabCardDetails } from './cabcard-details';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cabcards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cabcard-body">
      <div class="cabcard">
        <div class="cabcard-header">
          <h3>{{cabCardDetails.rideType}}</h3>
          <div>{{cabCardDetails.available ? 'Available' : 'Not Available'}}</div>
        </div>
        <div class="cabcard-content">
          <p>Pickup Location: {{cabCardDetails.pickupLocation}}</p>
          <p>Dropoff Location: {{cabCardDetails.dropoffLocation}}</p>
          <p>Time: {{cabCardDetails.time}}</p>
          <p>Price: {{cabCardDetails.price}}</p>
        </div>
        <div class="cabcard-footer">
          <div class="card-buttons">Book Now</div>
          <div class="card-buttons">RiderDetails</div>
        </div>
      </div>
    </div> 
  `,
  styleUrls:[ "./cabcards.component.css"]
})
export class CabcardsComponent {
  @Input() cabCardDetails!: CabCardDetails;
}
