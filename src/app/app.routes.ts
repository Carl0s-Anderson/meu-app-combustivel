import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'historico',
    loadComponent: () => import('./historico/historico.page').then( m => m.HistoricoPage)
  },
<<<<<<< HEAD
=======
  {
    path: 'historico',
    loadComponent: () => import('./historico/historico.page').then( m => m.HistoricoPage)
  },
>>>>>>> 9a4f2997795ce692f056054074eb6feaef0d3cbb
];
