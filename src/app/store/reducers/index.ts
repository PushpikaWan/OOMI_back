import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app-state';
import { simpleReducer } from './simple-reducer';
import { routerReducer } from '@ngrx/router-store';


export const combinedReducers: ActionReducerMap<AppState, any> = {
  simpleState: simpleReducer,
  routerState: routerReducer
};
