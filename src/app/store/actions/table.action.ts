import { createAction, props } from '@ngrx/store';
import { Table } from '../../models/models';

// todo all failures are navigated to try again state.. but need to verify network error or declined error ... and give specific message
export enum TableActionTypes {
  CREATE_TABLE = '[Table Data] create table',
  CREATE_TABLE_SUCCESS = '[Table Data] create table success',
  CREATE_TABLE_FAILURE = '[Table Data] create table failure',
  LISTENING_FOR_PENDING_PLAYERS = '[Table Data] listening for pending players',
  CHANGE_PENDING_PLAYER_LIST = '[Table Data] change pending player list',
  LISTENING_FOR_PENDING_PLAYERS_SUCCESS = '[Table Data] listening for pending players success',
  LISTENING_FOR_PENDING_PLAYERS_FAILED = '[Table Data] listening for pending players failure',

  JOIN_TABLE = '[Table Data] join table',
  JOIN_TABLE_SUCCESS = '[Table Data] join table success',
  JOIN_TABLE_FAILURE = '[Table Data] join table failure',
  JOIN_TABLE_WAITING_FOR_CONFIRMATION = '[Table Data] join table waiting for confirmation',
  JOIN_TABLE_CONFIRMED = '[Table Data] join table confirmed',
  JOIN_TABLE_REJECTED = '[Table Data] join table rejected',
}

export const createTableAction = createAction(TableActionTypes.CREATE_TABLE, props<{ tableData: Table }>());
export const createTableSuccessAction = createAction(TableActionTypes.CREATE_TABLE_SUCCESS, props<{ tableData: Table }>());
export const createTableFailureAction = createAction(TableActionTypes.CREATE_TABLE_FAILURE, props<{ error: string }>());

export const listeningForPendingPlayerAction = createAction(TableActionTypes.LISTENING_FOR_PENDING_PLAYERS, props<{ tableName: string }>());
export const changePendingPlayerListAction = createAction(TableActionTypes.CHANGE_PENDING_PLAYER_LIST, props<{ tableData: Table }>());
export const listeningForPendingPlayerSuccessAction = createAction(TableActionTypes.LISTENING_FOR_PENDING_PLAYERS_SUCCESS,
  props<{ tableData: Table }>());
export const listeningForPendingPlayerFailureAction = createAction(TableActionTypes.LISTENING_FOR_PENDING_PLAYERS_FAILED,
  props<{ error: string }>());

export const joinTableAction = createAction(TableActionTypes.JOIN_TABLE, props<{ tableName: string }>());
export const joinTableSuccessAction = createAction(TableActionTypes.JOIN_TABLE_SUCCESS);
export const joinTableFailureAction = createAction(TableActionTypes.JOIN_TABLE_FAILURE, props<{ error: string }>());

export const joinTableWaitingForConfirmationAction = createAction(TableActionTypes.JOIN_TABLE_WAITING_FOR_CONFIRMATION,
  props<{ tableName: string }>());
export const joinTableConfirmedAction = createAction(TableActionTypes.JOIN_TABLE_CONFIRMED, props<{ tableData: Table }>());
export const joinTableRejectedAction = createAction(TableActionTypes.JOIN_TABLE_REJECTED, props<{ error: string }>());

