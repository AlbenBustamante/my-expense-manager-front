import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent],
})
export class SharedModule {}
