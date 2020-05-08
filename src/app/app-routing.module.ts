import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TableComponent } from './main-board/table/table.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: Routes = [
    { path: 'card-table', component: TableComponent, canActivate: [AuthGuard] },
    { path: '*', component: HomePageComponent},
  ];
}
