// admin-cab.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CabCardDetails } from '../model/cabcard-details';

@Injectable({ providedIn: 'root' })
export class AdminCabService {
  private apiUrl = 'http://localhost:3000/CabCardDetailsList';

  constructor(private http: HttpClient) {}

  createNewCab(cabData: CabCardDetails): Observable<CabCardDetails> {
    return this.http.post<CabCardDetails>(this.apiUrl, cabData);
  }
}

