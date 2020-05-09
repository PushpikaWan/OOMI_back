import { initialUserState, UserState } from '../states/user.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction, logOutAction, logOutFailureAction, logOutSuccessAction,
} from '../actions/user.action';


const useReducer = createReducer(initialUserState,
  on(loginAction, () => initialUserState),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    userData: action.userData,
    isUserLoggedIn: true,
    error: null
  })),
  on(loginFailureAction, (state, action) => ({
    ...state,
    userData: { uid: null, email: null },
    isUserLoggedIn: false,
    error: action.error
  })),
  // logout flow
  on(logOutAction, (state) => ({ ...state })),
  on(logOutSuccessAction, () => initialUserState),
  on(logOutFailureAction, (state, action) => ({
    ...state,
    error: action.error
  }))
);


export function userReducer(state: UserState, action: Action): UserState {
  return useReducer(state, action);
}
