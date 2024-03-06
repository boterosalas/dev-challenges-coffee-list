import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coffee-list',
    loadChildren: () => import('./pages/coffee-list/coffee-list.module').then(m => m.CoffeeListModule)
  },
  {
    path: '**',
    redirectTo: 'coffee-list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
