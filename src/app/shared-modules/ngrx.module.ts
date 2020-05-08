import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { combinedReducers } from '../store/reducers';


export const NGRX_MODULES = [
  StoreModule.forRoot(combinedReducers),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot()
];
