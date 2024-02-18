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
      import('./pages/calendar/calendar.component').then((c) => c.CalendarComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/empty/empty.component').then((c) => c.EmptyComponent),
  }
];
