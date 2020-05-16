import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  TableActionTypes,
  createTableFailureAction,
  createTableSuccessAction,
  joinTableFailureAction,
  joinTableSuccessAction,
  joinTableRejectedAction, joinTableConfirmedAction, joinTableWaitingForConfirmationAction
} from '../actions/table.action';
import { TableService } from '../../services/table.service';
import { getErrorTextFromError } from '../../utils/common';


@Injectable()
export class TableEffect {

  createTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActionTypes.CREATE_TABLE),
      switchMap(
        ({ tableData }) => this.tableService.createTable(tableData).toPromise()
          .then((value) => {
            this.router.navigate(['/table-form']);
            return createTableSuccessAction({ tableData: value });
          })
          .catch((error) => createTableFailureAction({ error: getErrorTextFromError(error) })))));
  // ---------------------------------------------------------------------------------------------------------------------------------------

  joinTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActionTypes.JOIN_TABLE),
      switchMap(
        ({ tableName }) => this.tableService.joinTable(tableName).toPromise()
          // success call separately after user confirmed - do nothing if success
          .then(() => joinTableSuccessAction() && joinTableWaitingForConfirmationAction(tableName))
          .catch((error) => joinTableFailureAction({ error: getErrorTextFromError(error) })))));


  joinTableWaitingForConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TableActionTypes.JOIN_TABLE_WAITING_FOR_CONFIRMATION),
      switchMap(
        // todo remove hard coded value...
        ({ tableName }) => this.tableService.isConfirmed('1').pipe(
          map(isConfirmed => isConfirmed ? joinTableConfirmedAction({ tableData: null }) : joinTableRejectedAction(
            { error: 'rejected...' }))
        ))));

  constructor(
    private actions$: Actions,
    private router: Router,
    private tableService: TableService) {

  }
}
