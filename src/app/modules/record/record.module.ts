import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { NewRecordFormComponent } from './components/new-record-form/new-record-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCardComponent } from './components/form-card/form-card.component';
import { NewRecordComponent } from './pages/new-record/new-record.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NewRecordFormComponent, FormCardComponent, NewRecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class RecordModule {}
