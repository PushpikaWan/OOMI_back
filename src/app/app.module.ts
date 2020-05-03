import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardSetComponent } from './main-board/person-card-set/person-card-set.component';
import { TableComponent } from './main-board/table/table.component';
import { MaterialSharedModule } from './shared-modules/material-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PersonCardSetComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MaterialSharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
