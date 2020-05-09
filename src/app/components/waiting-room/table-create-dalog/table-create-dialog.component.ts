import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/states/app.state';
import { createTableAction } from '../../../store/actions/table.action';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-table-create-dalog',
  templateUrl: './table-create-dialog.component.html',
  styleUrls: ['./table-create-dialog.component.scss']
})
export class TableCreateDialogComponent implements OnInit {
  isLoading = false;
  errorMessage = '';
  dialogFormControl: FormControl;

  constructor(
    private readonly store: Store<AppState>,
    private dialogRef: MatDialogRef<TableCreateDialogComponent>) {
    this.dialogFormControl = new FormControl('');
    this.setListeners();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  createTable() {
    const currentDate = new Date();
    this.store.dispatch(createTableAction(
      { tableData: { tableName: this.dialogFormControl.value, lastUpdateDateTime: currentDate, startedDatTime: currentDate } }));
    this.isLoading = true;
  }

  private setListeners() {
    //
    this.errorMessage = `Please choose another name. ${this.dialogFormControl.value} name is already exists`;
    this.dialogFormControl.setErrors({ error: true });
  }
}
