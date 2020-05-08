import { UserState } from './user.state';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './custom-route-serializer';
import { createFeatureSelector } from '@ngrx/store';


export interface AppState {
  userState: UserState;
  routerState: fromRouter.RouterReducerState<RouterStateUrl>;
}


export const featureModule = 'myAppModule';

export const getAppCurrentState = createFeatureSelector<AppState>(featureModule);
