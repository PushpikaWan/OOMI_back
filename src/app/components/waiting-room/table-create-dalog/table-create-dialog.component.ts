import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';

import { AppState } from '../../../store/states/app.state';
import { createTableAction } from '../../../store/actions/table.action';
import { getTableData, getTableError } from '../../../store/selectors/table.selector';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-table-create-dialog',
  templateUrl: './table-create-dialog.component.html',
  styleUrls: ['./table-create-dialog.component.scss']
})
export class TableCreateDialogComponent implements OnInit {
  isLoading = false;
  errorMessage = '';
  dialogFormGroup: FormGroup;

  constructor(
    private readonly store: Store<AppState>,
    private dialogRef: MatDialogRef<TableCreateDialogComponent>) {
    this.dialogFormGroup = new FormGroup({
      dialogFormControl: new FormControl('')
    });
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
      {
        tableData: {
          tableName: this.dialogFormGroup.controls.dialogFormControl.value,
          lastUpdateDateTime: currentDate,
          startedDatTime: currentDate
        }
      }));
    this.isLoading = true;
  }

  private setListeners() {
    //
    this.store.pipe(select(getTableError)).subscribe(
      error => {
        if (error) {
          this.isLoading = false;
          this.dialogFormGroup.controls.dialogFormControl.setErrors({ error: true });
          this.errorMessage = error;
        }
      }
    );
    this.store.pipe(select(getTableData)).pipe(
      filter(tableData => tableData !== null && tableData.tableName !== undefined)
    ).subscribe(
      () => this.isLoading = false
    );
  }
}
