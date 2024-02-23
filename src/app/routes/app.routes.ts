import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('../features/calendar/calendar.component').then((c) => c.CalendarComponent),
  },
  {
    path: 'time-list',
    loadComponent: () => import('../features/time-list/time-list.component').then(c => c.TimeListComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('../features/empty/empty.component').then((c) => c.EmptyComponent),
  }
];
