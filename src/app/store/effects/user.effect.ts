import { Injectable } from '@angular/core';
import {
  loginFailureAction,
  loginSuccessAction, logOutFailureAction, logOutSuccessAction,
  updateUserDataAction, updateUserDataFailureAction,
  updateUserDataSuccessAction,
  UserActionTypes
} from '../actions/user.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';


@Injectable()
export class UserEffect {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOG_IN),
      mergeMap(
        () => this.authService.googleSignIn()
          .then(userData => (loginSuccessAction({ userData }) && updateUserDataAction({ userData })))
          .catch((error) => (loginFailureAction({ error: error?.toString() }))))));
  // ---------------------------------------------------------------------------------------------------------------------------------------
  //
  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UPDATE_USER_DATA),
      switchMap((({ userData }) => this.authService.updateUserData(userData)
        .then(() => (updateUserDataSuccessAction({ userData })))
        .catch((error) => (updateUserDataFailureAction({ error: error?.toString() })))))));
  // ---------------------------------------------------------------------------------------------------------------------------------------
  //
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOG_OUT),
      mergeMap(
        () => this.authService.signOut()
          .then(() => (logOutSuccessAction()))
          .catch((error) => (logOutFailureAction({ error: error?.toString() }))))));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>) {
    // this is used to check user is already logged in to the system and update state according to that
    this.authService.getAlreadySignedUser().pipe(
      take(1)
    ).subscribe(userData => {
      if (userData !== null) {
        this.store.dispatch(updateUserDataSuccessAction({ userData }));
      }
    });
  }
}
