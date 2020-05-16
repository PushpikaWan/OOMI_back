import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { createTableFailureAction, createTableSuccessAction, TableActionTypes } from '../actions/table.action';
import { TableService } from '../../services/table.service';
import { getErrorTextFromError } from '../../utils/common';


@Injectable()
export class TableEffect {

  createTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActionTypes.CREATE_TABLE),
      switchMap(
        ({ tableData }) => this.tableService.createTable(tableData).toPromise()
          .then((value) => createTableSuccessAction({ tableData: value }))
          .catch((error) => createTableFailureAction({ error: getErrorTextFromError(error) })))));
  // ---------------------------------------------------------------------------------------------------------------------------------------

  //
  // logout$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserActionTypes.LOG_OUT),
  //     mergeMap(
  //       () => this.authService.signOut()
  //         .then(() => (logOutSuccessAction()))
  //         .catch((error) => (logOutFailureAction({ error: error?.toString() }))))));

  constructor(
    private actions$: Actions,
    private tableService: TableService) {}
}
