import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './core/services/guard.service';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [() => inject(GuardService).authGuard()],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: '',
    canActivate: [() => inject(GuardService).redirectGuard()],
    loadChildren: () =>
      import('./modules/layout/layout.module').then(
        (layout) => layout.LayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
