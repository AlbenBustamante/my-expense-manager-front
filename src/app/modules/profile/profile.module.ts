import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MainStatsComponent } from './components/main-stats/main-stats.component';
import { CurrentBalanceComponent } from './components/current-balance/current-balance.component';
import { CalendarBtnComponent } from './components/calendar-btn/calendar-btn.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    MainStatsComponent,
    CurrentBalanceComponent,
    CalendarBtnComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
