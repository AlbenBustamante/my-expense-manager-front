import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavElementComponent } from './components/nav-element/nav-element.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, NavElementComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
