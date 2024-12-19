import { Injectable } from '@angular/core';
import { CabCardDetails } from './cabcards/cabcard-details';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  cabCardDetailsList: CabCardDetails[] = [{
    rideType: 'SUV CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'SUV CAB 3',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Sedan CAB 2',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'VAN 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Luxury CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'OLA CAB 1',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Luxury CAB 7',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Sedan CAB 4',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'OLA CAB 13',
    pickupLocation: 'Bangalore',
    dropoffLocation: 'Bangalore',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  ];
  getcabCardDetailsList(): CabCardDetails[] {
    return this.cabCardDetailsList;
  }
  getcabCardDetails(rideType: string): CabCardDetails | undefined {
    return this.cabCardDetailsList.find(cabCardDetails => cabCardDetails.rideType === rideType);
  } 
}
