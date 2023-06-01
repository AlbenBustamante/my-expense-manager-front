import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  declarations: [NavbarComponent, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, BtnComponent],
})
export class SharedModule {}
