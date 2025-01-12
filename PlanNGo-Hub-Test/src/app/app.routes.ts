import { Routes } from '@angular/router';
import { HomepageComponent } from './cab/Components/homepage/homepage.component';
import { CabComponent } from './cab/Components/cab/cab.component';
import { HistoryComponent } from './cab/Components/history/history.component';
import { UpdatesComponent } from './cab/Components/updates/updates.component';
import { CancellationComponent } from './cab/Components/cancellation/cancellation.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: CabComponent },

  { path: 'history', component: HistoryComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'cancellation', component: CancellationComponent },
  { path: '', component: HomepageComponent},
  { path: '**', redirectTo: '' }
];
