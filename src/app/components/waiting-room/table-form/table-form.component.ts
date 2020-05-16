import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from '../../../store/states/app.state';
import { getTableData } from '../../../store/selectors/table.selector';
import { User } from '../../../models/models';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  pendingPlayers: User[] = [];

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(getTableData)).pipe(filter(tableData => tableData !== null && tableData.tableName !== undefined))
      .subscribe(tableData => this.pendingPlayers = tableData.pendingPlayers);
  }

  onCancel() {}

  createGame() {

  }
}
