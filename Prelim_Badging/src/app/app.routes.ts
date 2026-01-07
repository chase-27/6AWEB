import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'partners', loadComponent: () => import('./partners/partners').then(m => m.Partners) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'join', loadComponent: () => import('./join/join').then(m => m.Join) },
];
