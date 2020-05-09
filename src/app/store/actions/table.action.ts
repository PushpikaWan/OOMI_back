import { createAction, props } from '@ngrx/store';
import { GameError, Table } from '../../models/models';

// todo all failures are navigated to try again state.. but need to verify network error or declined error ... and give specific message
export enum TableActionTypes {
  CREATE_TABLE = '[Table Data] create table',
  CREATE_TABLE_SUCCESS = '[Table Data] create table success',
  CREATE_TABLE_FAILURE = '[Table Data] create table failure',

  JOIN_TABLE = '[Table Data] join table',
  JOIN_TABLE_SUCCESS = '[Table Data] join table success',
  JOIN_TABLE_FAILURE = '[Table Data] join table failure',
}

export const createTableAction = createAction(TableActionTypes.CREATE_TABLE, props<{ tableData: Table }>());
export const createTableSuccessAction = createAction(TableActionTypes.CREATE_TABLE_SUCCESS, props<{ tableData: Table }>());
export const createTableFailureAction = createAction(TableActionTypes.CREATE_TABLE_FAILURE, props<{ error: GameError }>());

export const joinTableAction = createAction(TableActionTypes.JOIN_TABLE, props<{ tableData: Table }>());
export const joinTableSuccessAction = createAction(TableActionTypes.JOIN_TABLE_SUCCESS, props<{ tableData: Table }>());
export const joinTableFailureAction = createAction(TableActionTypes.JOIN_TABLE_FAILURE, props<{ error: GameError }>());
