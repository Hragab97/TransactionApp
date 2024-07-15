import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGraphComponent } from './customer-graph/customer-graph.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
  {path:"",component:CustomerTableComponent},
  {path:"chart", component:CustomerGraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
