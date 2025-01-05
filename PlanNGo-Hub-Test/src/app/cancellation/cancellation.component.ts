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
  bookedCabs: CabCardDetails[] = [];
  cancellationError: string = ''; 
  isCancelled: boolean = false;

  constructor(private cabService: CabService) {
    this.loadBookedCabs();
  }

  async loadBookedCabs() {
    try {
      this.bookedCabs = await this.cabService.getBookedCabs();
    } catch (error) {
      console.error('Error loading booked cabs:', error);
      this.cancellationError = 'An error occurred while fetching booked cabs.';
    }
  }
  
  async cancelBooking(cabId: string) {
    try {
      await this.cabService.cancelBooking(cabId);
      // Update the bookedCabs array after successful cancellation
      this.bookedCabs = this.bookedCabs.filter(cab => cab.id !== cabId); 
      this.isCancelled = true;
      this.cancellationError = ''; // Clear any previous errors
    } catch (error) {
      console.error('Error cancelling booking:', error);
      this.cancellationError = 'An error occurred while cancelling the booking.';
    }
  }
}
