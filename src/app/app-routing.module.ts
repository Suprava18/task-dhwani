import { TableComponent } from './table/table.component';
import { PieComponent } from './pie/pie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pieChart',
    component: PieComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
