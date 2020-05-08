import { SimpleState } from './simple-state';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './custom-route-serializer';


export interface AppState {
  simpleState: SimpleState;
  routerState: fromRouter.RouterReducerState<RouterStateUrl>;
}
