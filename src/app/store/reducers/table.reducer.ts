import { Action, createReducer, on } from '@ngrx/store';
import { initialTableState, TableState } from '../states/table.state';
import {
  createTableAction,
  createTableFailureAction,
  createTableSuccessAction,
  joinTableAction,
  joinTableFailureAction,
  joinTableConfirmedAction,
  joinTableSuccessAction,
  joinTableRejectedAction
} from '../actions/table.action';


const tableInternalReducer = createReducer(initialTableState,
  on(createTableAction, () => initialTableState),
  on(createTableSuccessAction, (state, action) => ({
    ...state,
    tableData: action.tableData,
    isError: false,
    error: null
  })),
  on(createTableFailureAction, (state, action) => ({
    ...state,
    tableData: null,
    isError: true,
    error: action.error
  })),
  // join table action
  on(joinTableAction, () => initialTableState),
  on(joinTableSuccessAction, (state) => ({
    ...state,
    tableData: null,
    isWaitingForJoinConfirmation: true
  })),
  on(joinTableFailureAction, (state, action) => ({
    ...state,
    tableData: null,
    isWaitingForJoinConfirmation: false,
    isError: true,
    error: action.error
  })),
  // join table confirmation
  on(joinTableConfirmedAction, (state, action) => ({
    ...state,
    tableData: action.tableData,
    isWaitingForJoinConfirmation: false,
    isError: false,
    error: null
  })),
  on(joinTableRejectedAction, (state, action) => ({
    ...state,
    tableData: null,
    isWaitingForJoinConfirmation: false,
    isError: true,
    error: action.error
  }))
);


export function tableReducer(state: TableState, action: Action): TableState {
  return tableInternalReducer(state, action);
}
