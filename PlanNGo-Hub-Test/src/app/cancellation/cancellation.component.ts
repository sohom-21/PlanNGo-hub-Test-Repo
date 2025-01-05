import { Component } from '@angular/core';
import { CabService } from '../cab.service';
import { CabCardDetails } from '../cabcards/cabcard-details';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
@Component({
  selector: 'app-cancellation',
  standalone: true,
  imports: [CommonModule, CabcardsComponent],
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {
  cabCardDetails: CabCardDetails | undefined;
  isCancelled: boolean = false;
  cancellationError: string = '';

  constructor(private cabService: CabService) {
    this.loadCabDetails();
  }

  async loadCabDetails() {
    try {
      // Fetch the cab details you want to display
      this.cabCardDetails = await this.cabService.getCabDetailsById('your-cab-id');
    } catch (error) {
      console.error('Error loading cab details:', error);
    }
  }

  async cancelBooking() {
    try {
      if (this.cabCardDetails) {
        await this.cabService.cancelBooking(this.cabCardDetails.id);
        this.isCancelled = true;
        this.cancellationError = '';
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      this.cancellationError = 'An error occurred while cancelling the booking.';
    }
  }
}
