import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonCardSetComponent } from './components/main-board/person-card-set/person-card-set.component';
import { TableComponent } from './components/main-board/table/table.component';
import { MaterialSharedModule } from './shared-modules/material-shared.module';
import { ServerLogicService } from './services/server-logic.service';
import { OtherPlayerCardSetComponent } from './components/main-board/other-player-card-set/other-player-card-set.component';
import { FIRE_MODULES } from './shared-modules/fire.module';
import { NGRX_MODULES } from './shared-modules/ngrx.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TableCreateDialogComponent } from './components/waiting-room/table-create-dalog/table-create-dialog.component';
import { TableJoinDialogComponent } from './components/waiting-room/table-join-dalog/table-join-dialog.component';
import { TableFormComponent } from './components/waiting-room/table-form/table-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonCardSetComponent,
    TableComponent,
    OtherPlayerCardSetComponent,
    UserProfileComponent,
    HomePageComponent,
    TableCreateDialogComponent,
    TableJoinDialogComponent,
    TableFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialSharedModule,
    BrowserAnimationsModule,
    FormsModule,
    NGRX_MODULES,
    FIRE_MODULES,
    AppRoutingModule,
  ],
  providers: [
    ServerLogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
