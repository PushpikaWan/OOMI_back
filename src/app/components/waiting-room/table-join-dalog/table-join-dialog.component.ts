import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from '../../../store/states/app.state';
import { TableCreateDialogComponent } from '../table-create-dalog/table-create-dialog.component';
import { joinTableAction } from '../../../store/actions/table.action';


@Component({
  selector: 'app-table-join-dalog',
  templateUrl: './table-join-dialog.component.html',
  styleUrls: ['./table-join-dialog.component.scss']
})
export class TableJoinDialogComponent implements OnInit {
  isLoading = false;
  errorMessage = '';
  dialogFormGroup: FormGroup;

  constructor(
    private readonly store: Store<AppState>,
    private dialogRef: MatDialogRef<TableCreateDialogComponent>) {
    this.dialogFormGroup = new FormGroup({
      tableNameFieldControl: new FormControl('')
    });
    this.setListeners();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  joinTable() {
    this.store.dispatch(joinTableAction({ tableName: this.dialogFormGroup.controls.tableNameFieldControl.value }));
    this.isLoading = true;
  }

  private setListeners() {
    // //
    // this.store.pipe(select(getTableError)).subscribe(
    //   error => {
    //     if (error) {
    //       this.isLoading = false;
    //       this.dialogFormGroup.controls.tableNameFieldControl.setErrors({ error: true });
    //       this.errorMessage = error;
    //     }
    //   }
    // );
    // this.store.pipe(select(getTableData)).pipe(
    //   filter(tableData => tableData !== null && tableData.tableName !== undefined)
    // ).subscribe(
    //   () => this.dialogRef.close()
    // );
  }
}
