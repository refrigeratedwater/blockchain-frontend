import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ViewRecordComponent } from './components/view-record/view-record.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { ViewAuthorComponent } from './components/view-author/view-author.component';
import { WelcomeComponent } from './components/loaders/welcome/welcome.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  { path: 'add', component: AddRecordComponent },
  { path: 'view', component: ViewRecordComponent },
  { path: 'author', component: ViewAuthorComponent },
  { path: 'nodes', component: NodesComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
