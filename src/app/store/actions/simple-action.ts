import { createAction, props } from '@ngrx/store';


export enum SimpleActionTypes {
  LOAD_SIMPLE_DATA = '[Simple Data] load simple data',
  LOAD_SIMPLE_DATA_SUCCESS = '[Simple Data] load simple data success',
  LOAD_SIMPLE_DATA_FAILURE = '[Simple Data] load simple data failure'
}

export const loadSimpleDataAction = createAction(SimpleActionTypes.LOAD_SIMPLE_DATA);
// payload props<{ loadedSimpleData: string }
export const loadSimpleDataSuccessAction = createAction(SimpleActionTypes.LOAD_SIMPLE_DATA_SUCCESS, props<{ loadedSimpleData: string }>());
export const loadSimpleDataFailureAction = createAction(SimpleActionTypes.LOAD_SIMPLE_DATA_FAILURE);
