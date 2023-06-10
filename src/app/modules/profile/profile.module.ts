import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MainStatsComponent } from './components/main-stats/main-stats.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, MainStatsComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
