import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';


const MAT_SHARED_MODULES = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule
];

@NgModule({
  imports: MAT_SHARED_MODULES,
  exports: MAT_SHARED_MODULES

})
export class MaterialSharedModule {}
