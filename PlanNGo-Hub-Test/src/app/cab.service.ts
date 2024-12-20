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
}
