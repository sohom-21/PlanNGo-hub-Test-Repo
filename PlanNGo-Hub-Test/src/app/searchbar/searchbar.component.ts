import { Component } from '@angular/core';
@Component({
  selector: 'app-searchbar',
  template: `
    <div class="searchbar">
      <form (submit)="onSearch()">
        <!-- Ride Type -->
        <select class="select-field" [(ngModel)]="rideType" name="rideType" required>
          <option value="" disabled selected>Ride Type</option>
          <option value="SUV">SUV</option>
          <option value="HATCHBACK">HatchBack</option>
          <option value="Luxury">Luxury</option>
          <option value="Sedan">Sedan</option>
          <option value="OLA">OLA</option>
        </select>
        
        <!-- Pickup Location Dropdown -->
        <select class="select-field" [(ngModel)]="pickupLocation" name="pickupLocation" required>
          <option value="" disabled selected>Pickup Location</option>
          <option value="Location A">Location A</option>
          <option value="Location B">Location B</option>
          <option value="Location C">Location C</option>
        </select>
        
        <!-- Dropoff Location Dropdown -->
        <select class="select-field" [(ngModel)]="dropoffLocation" name="dropoffLocation" required>
          <option value="" disabled selected>Dropoff Location</option>
          <option value="Location D">Location D</option>
          <option value="Location E">Location E</option>
          <option value="Location F">Location F</option>
        </select>

        <!-- Time Dropdown -->
        <select class="select-field" [(ngModel)]="time" name="time" required>
          <option value="" disabled selected>Select Time</option>
          <option value="8:00 AM">8:00 AM</option>
          <option value="8:30 AM">8:30 AM</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="9:30 AM">9:30 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="10:30 AM">10:30 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="11:30 AM">11:30 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="1:30 PM">1:30 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="2:30 PM">2:30 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="3:30 PM">3:30 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="4:30 PM">4:30 PM</option>
          <option value="5:00 PM">5:00 PM</option>
          <option value="5:30 PM">5:30 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="6:30 PM">6:30 PM</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="7:30 PM">7:30 PM</option>
          <option value="8:00 PM">8:00 PM</option>
          <option value="8:30 PM">8:30 PM</option> 
        </select>
        <!-- Submit Button -->
        <button type="submit" class="search-btn">Search</button>
      </form>
    </div>
  `,
  styleUrl:'./searchbar.component.css'
})
export class SearchbarComponent {
  rideType: string = '';
  pickupLocation: string = '';
  dropoffLocation: string = '';
  time: string = '';

  onSearch() {
    console.log('Ride Type:', this.rideType);
    console.log('Pickup Location:', this.pickupLocation);
    console.log('Dropoff Location:', this.dropoffLocation);
    console.log('Ride Time:', this.time);
  }
}

