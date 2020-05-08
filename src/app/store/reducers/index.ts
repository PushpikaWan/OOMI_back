import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app-state';
import { simpleReducer } from './simple-reducer';


export const combinedReducers: ActionReducerMap<AppState, any> = {
  simpleState: simpleReducer
};
