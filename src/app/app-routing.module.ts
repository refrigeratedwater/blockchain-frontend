import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ViewRecordComponent } from './components/view-record/view-record.component';

const routes: Routes = [
  {
    path: 'add', component: AddRecordComponent,
  },
  { path: 'view', component: ViewRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
