import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';
import { combinedReducers } from '../store/reducers';
import { CustomRouteSerializer } from '../store/states/custom-route-serializer';


export const NGRX_MODULES = [
  StoreModule.forRoot(combinedReducers),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
  RouterModule.forRoot([
    // routes
  ]),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router', // name of reducer key
    serializer: CustomRouteSerializer,
    navigationActionTiming: NavigationActionTiming.PostActivation
  })
];
