import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
  declarations: [ReportsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
