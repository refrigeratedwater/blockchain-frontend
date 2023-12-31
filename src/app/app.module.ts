import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ViewRecordComponent } from './components/view-record/view-record.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { MaterialModule } from './material/material.module';
import { BlockchainService } from './services/blockchain.service';
import { HttpClientModule } from '@angular/common/http';
import { NodesComponent } from './components/nodes/nodes.component';
import { ViewAuthorComponent } from './components/view-author/view-author.component';
import { RecordLoaderComponent } from './components/loaders/record-loader/record-loader.component';
import { WelcomeComponent } from './components/loaders/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewRecordComponent,
    AddRecordComponent,
    NodesComponent,
    ViewAuthorComponent,
    RecordLoaderComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
