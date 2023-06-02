import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((home) => home.HomeModule),
      },
      {
        path: 'record',
        loadChildren: () =>
          import('../record/record.module').then(
            (record) => record.RecordModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../category/category.module').then(
            (category) => category.CategoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
