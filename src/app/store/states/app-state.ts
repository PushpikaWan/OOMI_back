import { initialSimpleState, SimpleState } from './simple-state';


export interface AppState {
  simpleState: SimpleState;
}

export const initialAppState: AppState = {
  simpleState: initialSimpleState
};

