import { Action, createReducer, on } from '@ngrx/store';
import { initialTableState, TableState } from '../states/table.state';
import { createTableAction, createTableFailureAction, createTableSuccessAction } from '../actions/table.action';


const tableInternalReducer = createReducer(initialTableState,
  on(createTableAction, () => initialTableState),
  on(createTableSuccessAction, (state, action) => ({
    ...state,
    tableData: action.tableData,
    error: null
  })),
  on(createTableFailureAction, (state, action) => ({
    ...state,
    tableData: null,
    error: action.error
  }))
);


export function tableReducer(state: TableState, action: Action): TableState {
  return tableInternalReducer(state, action);
}
