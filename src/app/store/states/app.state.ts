import { UserState } from './user.state';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './custom-route-serializer';


export interface AppState {
  userState: UserState;
  routerState: fromRouter.RouterReducerState<RouterStateUrl>;
}
