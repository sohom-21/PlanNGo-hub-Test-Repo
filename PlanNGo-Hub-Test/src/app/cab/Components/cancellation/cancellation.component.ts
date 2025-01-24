import { Component } from '@angular/core';
import { CabService } from '../../services/cab.service';
import { CabCardDetails } from '../../model/cabcard-details';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cancellation',
  standalone: true,
  imports: [CommonModule, CabcardsComponent , RouterLink] ,
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
}
