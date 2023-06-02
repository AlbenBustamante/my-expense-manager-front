import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecordComponent } from './pages/new-record/new-record.component';

const routes: Routes = [{ path: '', component: NewRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordRoutingModule {}
