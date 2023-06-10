import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
