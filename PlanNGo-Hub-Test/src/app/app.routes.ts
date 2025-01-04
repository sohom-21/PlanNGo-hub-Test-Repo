import { Routes } from '@angular/router';
import { CabComponent } from './cab/cab.component';
import { HistoryComponent } from './history/history.component';
import { UpdatesComponent } from './updates/updates.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import {HomepageComponent} from './homepage/homepage.component'

export const routes: Routes = [
  { path: 'cab', component: CabComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: '', component: HomepageComponent},
  { path: '**', redirectTo: '' }
];
