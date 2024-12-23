import { Routes } from '@angular/router';
import { CabComponent } from './cab/cab.component';
import { HistoryComponent } from './history/history.component';
import { UpdatesComponent } from './updates/updates.component';
import { CancellationComponent } from './cancellation/cancellation.component';

export const routes: Routes = [
  { path: '', component: CabComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: '**', redirectTo: '' }
];
