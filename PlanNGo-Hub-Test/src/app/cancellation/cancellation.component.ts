import { Component } from '@angular/core';
import { CabService } from '../cab.service'; // Import your CabService

@Component({
  selector: 'app-cancellation',
  standalone: true,
  imports: [],
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {
  bookingId: string = '';
  isCancelled: boolean = false;
  cancellationError: string = '';

  constructor(private cabService: CabService) { }

  async cancelBooking() {
    try {
      // Call your cab service to cancel the booking
      await this.cabService.cancelBooking(this.bookingId); // Implement this function in CabService

      this.isCancelled = true;
      this.cancellationError = '';
    } catch (error) {
      console.error('Error cancelling booking:', error);
      this.cancellationError = 'An error occurred while cancelling the booking.'; // Display user-friendly error message
    }
  }
}
