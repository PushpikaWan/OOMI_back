import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../states/app.state';
import { userReducer } from './user.reducer';
import { tableReducer } from './table.reducer';


export const combinedReducers: ActionReducerMap<AppState, any> = {
  userState: userReducer,
  tableState: tableReducer,
  routerState: routerReducer
};
