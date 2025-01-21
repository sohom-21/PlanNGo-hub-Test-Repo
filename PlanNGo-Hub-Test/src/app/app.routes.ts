import { Routes } from '@angular/router';
import { HomepageComponent } from './cab/Components/homepage/homepage.component';
import { CabComponent } from './cab/Components/cab/cab.component';
import { HistoryComponent } from './cab/Components/history/history.component';
import { UpdatesComponent } from './cab/Components/updates/updates.component';
import { CancellationComponent } from './cab/Components/cancellation/cancellation.component';
import { DashboardComponent } from './cab/Components/admin/dashboard/dashboard.component';
import { RideManageComponent } from './cab/Components/admin/ride-manage/ride-manage.component';
import { CustomerComponent } from './cab/Components/admin/customer/customer.component';
import { EmployeeComponent } from './cab/Components/admin/employee/employee.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: CabComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'ride-manage', component: RideManageComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '**', redirectTo: '' }
];
