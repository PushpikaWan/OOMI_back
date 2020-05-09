import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/states/app.state';
import { createTableAction } from '../../../store/actions/table.action';


@Component({
  selector: 'app-table-create-dalog',
  templateUrl: './table-create-dialog.component.html',
  styleUrls: ['./table-create-dialog.component.scss']
})
export class TableCreateDialogComponent implements OnInit {
  tableName: string;
  isLoading = false;

  constructor(
    private readonly store: Store<AppState>,
    private dialogRef: MatDialogRef<TableCreateDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  createTable() {
    this.store.dispatch(createTableAction({ tableData: { tableName: this.tableName } }));
    this.isLoading = true;
  }
}
