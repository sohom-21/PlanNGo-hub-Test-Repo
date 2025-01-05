import { Injectable } from '@angular/core';
import { CabCardDetails } from './cabcards/cabcard-details';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private url = 'http://localhost:3000/CabCardDetailsList';

  async getcabCardDetailsList(): Promise<CabCardDetails[]> {
    const data = await fetch(this.url);
    return await data.json();
  }

  async getcabCardDetails(rideType: string): Promise<CabCardDetails | undefined> {
    const allCabs = await this.getcabCardDetailsList();
    return allCabs.find(cabCardDetails => cabCardDetails.rideType === rideType);
  }
  async getCabDetailsById(id: string): Promise<CabCardDetails | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? undefined;
  }

  async bookCab(cabId: string): Promise<void> {
    try {
      // 1. Fetch the cab details from CabCardDetailsList
      const cabDetails = await this.getCabDetailsById(cabId);
      if (!cabDetails) {
        throw new Error('Cab not found!');
      }

      // 2. Remove the cab from CabCardDetailsList
      await fetch(`${this.url}/CabCardDetailsList/${cabId}`, {
        method: 'DELETE'
      });

      // 3. Add the cab to BookedCabList
      cabDetails.available = false; // Set cab as unavailable
      await fetch(`${this.url}/BookedCabList`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cabDetails)
      });
    } catch (error) {
      console.error('Error booking cab:', error);
      throw error; // Re-throw the error to be handled in the component
    }
  }
  async cancelBooking(bookingId: string): Promise<void> {
    // Implement the logic to cancel a booking based on bookingId
    // This might involve:
    // 1. Fetching the booking details from BookedCabList
    // 2. Removing the booking from BookedCabList
    // 3. Optionally, adding the cab back to CabCardDetailsList with available: true
    // 4. Making necessary API calls to your backend
  }
}
