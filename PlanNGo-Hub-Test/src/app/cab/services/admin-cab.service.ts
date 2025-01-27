// admin-cab.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CabCardDetails } from '../model/cabcard-details';
import { Employee } from '../model/employee';
@Injectable({ providedIn: 'root' })
export class AdminCabService {
  private apiUrl = 'http://localhost:3000/CabCardDetailsList';
  private employeeApiUrl = 'http://localhost:3000/cabEmployee';
  constructor(private http: HttpClient) {}

  createNewCab(cabData: CabCardDetails): Observable<CabCardDetails> {
    return this.http.post<CabCardDetails>(this.apiUrl, cabData);
  }
  createEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeApiUrl, employeeData);
  }
}

