import { Component } from '@angular/core';
import { RmTableComponent } from '../rm-table/rm-table.component';
import{EmployeeFormComponent} from '../employee-form/employee-form.component'

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RmTableComponent,EmployeeFormComponent],
  template: `
  <div class="navbar">
   <ul>
    <li><a  href="/admin">Dashboard</a></li>
    <li><a href="/ride-manage">Rides</a></li>
    <li><a href="/customer">Customers</a></li>
    <li><a class="current" href="/employee">Employees</a></li>
  </ul>
  </div>
    <div class="header-h"><h1>All Employees</h1></div>
    <div class="header">
  <button class="button-85" role="button" (click)="onaddclick()">Add Employee</button>
  
  </div>

    <app-rm-table></app-rm-table>
    @if (isPopupVisible==true)
  {<app-employee-form [onClose]="closePopup"></app-employee-form>}

    
  `,
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  isPopupVisible = false;
  onaddclick(){
      this.isPopupVisible=true;
  }
  closePopup = () => {
    this.isPopupVisible = false;
  };
}
