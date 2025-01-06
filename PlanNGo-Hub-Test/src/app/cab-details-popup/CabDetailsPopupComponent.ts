import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CabCardDetails } from '../cabcards/cabcard-details';


@Component({
  selector: 'app-cab-details-popup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popup-overlay" (click)="onClose()()">
      <div class="popup-content" (click)="$event.stopPropagation()">
        <div id="grad">
          <button class="close-btn" (click)="onClose()()">×</button>
          <h2><strong>Cab Details</strong></h2>
        </div>
        <div class="cab-info">
          <div class="half-d">
            <p><strong>Driver name</strong> {{cabDetails().FullName}}</p>
            <p><strong>Date of birth</strong> {{cabDetails().dob}}</p>
            <p><strong>Languages</strong> {{cabDetails().Language}}</p>
            </div>
          
          <div class="half-d">
            <p><strong>Rider No.</strong> {{cabDetails().Rider}}</p>
            <p><strong>Licence No.</strong> {{cabDetails().Licence}}</p>
            <p><strong>Rating :</strong><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span></p>
            <!--<p><strong>Time:</strong> {{cabDetails().time}}</p>
            <p><strong>Price:</strong> ₹{{cabDetails().price}}</p>
            <p><strong>Status:</strong> {{cabDetails().available ? 'Available' : 'Not Available'}}</p>-->
            </div>
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
  readonly cabDetails = input.required<CabCardDetails>();
  readonly onClose = input.required<() => void>();
}
