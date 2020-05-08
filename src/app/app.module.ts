import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardSetComponent } from './main-board/person-card-set/person-card-set.component';
import { TableComponent } from './main-board/table/table.component';
import { MaterialSharedModule } from './shared-modules/material-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerLogicService } from './core-server/server-logic.service';
import { OtherPlayerCardSetComponent } from './main-board/other-player-card-set/other-player-card-set.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { combinedReducers } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    PersonCardSetComponent,
    TableComponent,
    OtherPlayerCardSetComponent
  ],
  imports: [
    BrowserModule,
    MaterialSharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(combinedReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    ServerLogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
