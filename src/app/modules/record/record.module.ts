import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { NewRecordComponent } from './pages/new-record/new-record.component';
import { NewRecordFormComponent } from './components/new-record-form/new-record-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewRecordComponent, NewRecordFormComponent],
  imports: [CommonModule, RecordRoutingModule, SharedModule],
})
export class RecordModule {}
