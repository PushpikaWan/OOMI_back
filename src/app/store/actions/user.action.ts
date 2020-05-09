import { createAction, props } from '@ngrx/store';
import { User } from '../../models/models';


export enum UserActionTypes {
  LOG_IN = '[User Data] user login',
  LOG_IN_SUCCESS = '[User Data] user login success',
  LOG_IN_FAILURE = '[User Data] user login failure',
  LOG_OUT = '[User Data] user logout',
  LOG_OUT_SUCCESS = '[User Data] user logout success',
  LOG_OUT_FAILURE = '[User Data] user logout failure',
}

export const loginAction = createAction(UserActionTypes.LOG_IN);
export const loginSuccessAction = createAction(UserActionTypes.LOG_IN_SUCCESS, props<{ userData: User }>());
export const loginFailureAction = createAction(UserActionTypes.LOG_IN_FAILURE, props<{ error: string }>());

export const logOutAction = createAction(UserActionTypes.LOG_OUT);
export const logOutSuccessAction = createAction(UserActionTypes.LOG_OUT_SUCCESS);
export const logOutFailureAction = createAction(UserActionTypes.LOG_OUT_FAILURE, props<{ error: string }>());
