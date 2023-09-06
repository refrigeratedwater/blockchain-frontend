import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ViewRecordComponent } from './components/view-record/view-record.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { ViewAuthorComponent } from './components/view-author/view-author.component';

const routes: Routes = [
  { path: 'add', component: AddRecordComponent },
  { path: 'view', component: ViewRecordComponent },
  { path: 'author', component: ViewAuthorComponent },
  { path: 'nodes', component: NodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
