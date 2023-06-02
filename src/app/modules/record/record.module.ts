import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { NewRecordComponent } from './pages/new-record/new-record.component';


@NgModule({
  declarations: [
    NewRecordComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
