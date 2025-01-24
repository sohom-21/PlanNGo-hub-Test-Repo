import { Injectable } from '@angular/core';
import { RouteRequest, RouteResponse } from '../Components/update/routing';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private apiUrl = '/ors/v2/directions/driving-car';
  private apiKey = '5b3ce3597851110001cf6248e3c2b93ce282428b80acb2538a7f51ab'; 

   constructor() {}

  async getRoute(start: [number, number], end: [number, number]): Promise<RouteResponse> {
    const request: RouteRequest = {
      origin: start,
      destination: end
    };
    const url = `${this.apiUrl}?api_key=${this.apiKey}&start=${request.origin[0]},${request.origin[1]}&end=${request.destination[0]},${request.destination[1]}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: RouteResponse = await response.json();
      return data; 

    } catch (error) {
      console.error('Error fetching route:', error);
      throw error; 
    }
  }
}

