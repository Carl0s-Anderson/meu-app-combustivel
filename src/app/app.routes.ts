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
  },  {
    path: 'cadastro-veiculo',
    loadComponent: () => import('./cadastro-veiculo/cadastro-veiculo.page').then( m => m.CadastroVeiculoPage)
  },

 
];