import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [() => inject(AuthGuardService).canActivateWithAuth()],
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
