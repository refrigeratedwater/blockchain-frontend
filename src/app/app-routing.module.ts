import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ViewRecordComponent } from './components/view-record/view-record.component';
import { NodesComponent } from './components/nodes/nodes.component';

const routes: Routes = [
  { path: 'view', component: ViewRecordComponent },
  { path: 'nodes', component: NodesComponent },
  { path: 'add', component: AddRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
