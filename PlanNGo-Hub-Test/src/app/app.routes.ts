import { Routes } from '@angular/router';
import { HomepageComponent } from './cab/Components/homepage/homepage.component';
import { CabComponent } from './cab/Components/cab/cab.component';
import { HistoryComponent } from './cab/Components/history/history.component';
import { CancellationComponent } from './cab/Components/cancellation/cancellation.component';
import { DashboardComponent } from './cab/Components/admin/dashboard/dashboard.component';
import { RideManageComponent } from './cab/Components/admin/ride-manage/ride-manage.component';
import { CustomerComponent } from './cab/Components/admin/customer/customer.component';
import { EmployeeComponent } from './cab/Components/admin/employee/employee.component';
import { MapsandcabsComponent } from './cab/Components/mapsandcabs/mapsandcabs.component';
import { ServiceProviderDashboardComponent } from './cab/Components/service-provider-dashboard/service-provider-dashboard.component';
import{ProviderComponent} from './cab/Components/admin/provider/provider.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: CabComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'updates', component: MapsandcabsComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'ride-manage', component: RideManageComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'provider', component: ProviderComponent },
  {
    path:'service-provider',
    component:ServiceProviderDashboardComponent
  },
  { path: '**', redirectTo: '' }
];

