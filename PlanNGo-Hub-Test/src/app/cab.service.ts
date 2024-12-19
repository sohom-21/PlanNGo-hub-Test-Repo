import { Injectable } from '@angular/core';
import { CabCardDetails } from './cabcards/cabcard-details';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  cabCardDetailsList: CabCardDetails[] = [{
    rideType: 'SUV CAB 1',
    pickupLocation: 'Bangalore, Koramangala',
    dropoffLocation: 'Bangalore, Whitefield',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'SUV CAB 3',
    pickupLocation: 'Bangalore, Indiranagar',
    dropoffLocation: 'Bangalore, Electronic City',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Sedan CAB 2',
    pickupLocation: 'Bangalore, Hebbal',
    dropoffLocation: 'Bangalore, Jayanagar',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'VAN 1',
    pickupLocation: 'Bangalore, Cyber City',
    dropoffLocation: 'Gurugram, Sohna Road',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Luxury CAB 1',
    pickupLocation: 'Gurugram, DLF Phase 1',
    dropoffLocation: 'Gurugram, Golf Course Road',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'OLA CAB 1',
    pickupLocation: 'Gurugram, Sector 29',
    dropoffLocation: 'Gurugram, Udyog Vihar',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Luxury',
    pickupLocation: 'Andhra Pradesh, Vijayawada',
    dropoffLocation: 'Andhra Pradesh, Visakhapatnam',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'Sedan CAB 4',
    pickupLocation: 'Andhra Pradesh, Tirupati',
    dropoffLocation: 'Andhra Pradesh, Guntur',
    time: '10:00 AM',
    price: 1000,
    available: true
  },
  {
    rideType: 'OLA CAB 13',
    pickupLocation: 'Andhra Pradesh, Kurnool',
    dropoffLocation: 'Andhra Pradesh, Rajahmundry',
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
