import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabcardsComponent } from '../cabcards/cabcards.component';
import { CabCardDetails } from '../cabcards/cabcard-details';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SearchbarModule } from "../searchbar/searchbar.module";
import { CabService } from '../cab.service';
@Component({
  selector: 'app-cab',
  standalone: true,
  imports: [CommonModule,
    CabcardsComponent, SidebarComponent, SearchbarModule],

  template: `
   <div class="cabcard-container">
      <app-sidebar></app-sidebar>
      <div>
        <app-searchbar (searchEvent)="handleSearch($event)"></app-searchbar>
        <div class="cabcards-only">
        @if (errorMessage) {
            <div class="no-results">{{ errorMessage }}</div>
          }@else if (filteredDetailsList.length > 0) {
          <app-cabcards
            *ngFor="let cabCardDetails of filteredDetailsList"
            [cabCardDetails]="cabCardDetails">
          </app-cabcards>
          }
          @else {
          <div class="no-results">
          {{ !hasSearched ? 'Search for available cabs' : 'No cabs found matching your criteria' }}
          </div>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './cab.component.css'
})
export class CabComponent {
  cabCardDetailsList: CabCardDetails[] = [];
  filteredDetailsList: CabCardDetails[] = [];
  cabservice: CabService = inject(CabService);
  hasSearched: boolean = false;
  errorMessage: string = '';

  
  constructor() {
    this.loadInitialCabs();
  }
  async loadInitialCabs() {
    try {
      this.cabCardDetailsList = await this.cabservice.getcabCardDetailsList();
      // this.filteredDetailsList = [...this.cabCardDetailsList];
      // console.log('Successfully connected to db.json. Data:', this.cabCardDetailsList);
    } catch (error) {
      console.error('Error loading cabs:', error);
    }
  }
  
  async handleSearch(searchCriteria: any) {
    this.hasSearched = true;

    try {
      // First check if at least rideType or location is provided
      if ((!searchCriteria.rideType && !searchCriteria.pickupLocation && !searchCriteria.dropoffLocation) && searchCriteria.time) {
        this.errorMessage = 'Please select at least a ride type or location along with time';
        this.filteredDetailsList = [];
        return;
      }
      console.log('Search criteria received:', searchCriteria);

      const allCabs = await this.cabservice.getcabCardDetailsList();
      this.filteredDetailsList = allCabs.filter(cab => {
        // Only check for a match if the criteria is provided
        const rideTypeMatch = !searchCriteria.rideType || (searchCriteria.rideType && cab.rideType.toLowerCase().includes(searchCriteria.rideType.toLowerCase()));

        const pickupMatch = !searchCriteria.pickupLocation || (searchCriteria.pickupLocation && cab.pickupLocation.toLowerCase().trim() === searchCriteria.pickupLocation.toLowerCase().trim());

        const dropoffMatch = !searchCriteria.dropoffLocation ||(searchCriteria.dropoffLocation && cab.dropoffLocation.toLowerCase().trim() === searchCriteria.dropoffLocation.toLowerCase().trim());
        
        const timeMatch = !searchCriteria.time || (searchCriteria.time && cab.time.toLowerCase().trim() === searchCriteria.time.toLowerCase().trim());

        // console.log(`Matching ${cab.rideType}:`, {
        //       rideTypeMatch,
        //       pickupMatch,
        //       dropoffMatch,
        //       timeMatch
        //     });
        return rideTypeMatch && pickupMatch && dropoffMatch && timeMatch;
      });

      console.log('Filtered results:', this.filteredDetailsList);
    } catch (error) {
      console.error('Error during search:', error);
    }
  }
}
// this.filteredDetailsList = this.cabCardDetailsList.filter(cab => {
//   const rideTypeMatch = cab.rideType.toLowerCase().includes(searchCriteria.rideType.toLowerCase());
//   const pickupMatch = cab.pickupLocation.toLowerCase().trim() === searchCriteria.pickupLocation.toLowerCase().trim();
//   const dropoffMatch = cab.dropoffLocation.toLowerCase().trim() === searchCriteria.dropoffLocation.toLowerCase().trim();
//   const timeMatch = cab.time.toLowerCase().trim() === searchCriteria.time.toLowerCase().trim();

//   console.log(`Matching ${cab.rideType}:`, {
//     rideTypeMatch,
//     pickupMatch,
//     dropoffMatch,
//     timeMatch
//   });
//   return rideTypeMatch && pickupMatch && dropoffMatch && timeMatch;
// });
// console.log('Filtered results:', this.filteredDetailsList);console.log('Filtered results:', this.filteredDetailsList);