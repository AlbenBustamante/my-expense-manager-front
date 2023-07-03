import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [BtnComponent, ModalComponent],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [BtnComponent, ModalComponent],
})
export class SharedModule {}
