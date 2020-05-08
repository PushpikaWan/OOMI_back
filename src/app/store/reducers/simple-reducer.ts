import { initialSimpleState, SimpleState } from '../states/simple-state';
import { Action, createReducer, on } from '@ngrx/store';
import { loadSimpleDataAction, loadSimpleDataFailureAction, loadSimpleDataSuccessAction } from '../actions/simple-action';


const loadSimpleDataReducer = createReducer(initialSimpleState,
  on(loadSimpleDataAction, () => initialSimpleState),
  on(loadSimpleDataSuccessAction, (state) => loadSimpleDataSuccess(state)),
  on(loadSimpleDataFailureAction, (state) => loadSimpleDataFailed(state)));


export function simpleReducer(state: SimpleState, action: Action): SimpleState {
  return loadSimpleDataReducer(state, action);
}


function loadSimpleDataSuccess(state: SimpleState): SimpleState {
  return { ...state }; // do changes for the state here
}

function loadSimpleDataFailed(state: SimpleState): SimpleState {
  return { ...state }; // do changes for the state here
}
