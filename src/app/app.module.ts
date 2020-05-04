import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewBooksComponent } from './view-books/view-books.component';
import { NgbdSortableHeaderDirective } from './ngbd-sortable-header.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomePageComponent } from './home-page/home-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    NgbdSortableHeaderDirective,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
