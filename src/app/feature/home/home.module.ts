import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
