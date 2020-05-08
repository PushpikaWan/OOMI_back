import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { userReducer } from './user.reducer';
import { routerReducer } from '@ngrx/router-store';


export const combinedReducers: ActionReducerMap<AppState, any> = {
  userState: userReducer,
  routerState: routerReducer
};
