import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';

import { AppState } from '../../../store/states/app.state';
import { getTableData } from '../../../store/selectors/table.selector';
import { User } from '../../../models/models';
import { listeningForPendingPlayerAction } from '../../../store/actions/table.action';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent {

  pendingPlayers: User[] = [];

  constructor(private readonly store: Store<AppState>) {
    this.store.pipe(select(getTableData)).pipe(filter(tableData => tableData !== null && tableData.tableName !== undefined))
      .subscribe(tableData => this.pendingPlayers = tableData.pendingPlayers);
    this.store.pipe(select(getTableData)).pipe(
      filter(tableData => tableData !== null && tableData !== undefined),
      take(1),
      tap(tableData => this.store.dispatch(listeningForPendingPlayerAction({ tableName: tableData.tableName })))
    ).subscribe();
  }

  onCancel() {}

  createGame() {

  }
}
