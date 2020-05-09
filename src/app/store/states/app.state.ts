import { UserState } from './user.state';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './custom-route-serializer';
import { TableState } from './table.state';


export interface AppState {
  userState: UserState;
  tableState: TableState;
  routerState: fromRouter.RouterReducerState<RouterStateUrl>;
}
