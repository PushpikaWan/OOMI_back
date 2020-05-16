import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TableComponent } from './components/main-board/table/table.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableFormComponent } from './components/waiting-room/table-form/table-form.component';


const routes: Routes = [
  { path: 'card-table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'table-form', component: TableFormComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
