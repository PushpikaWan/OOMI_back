import { Injectable } from '@angular/core';
import { updateUserDataSuccessAction, UserActionTypes } from '../actions/user.action';
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
          .then(userData => ({ type: UserActionTypes.LOG_IN_SUCCESS, payload: { userData } } &&
            { type: UserActionTypes.UPDATE_USER_DATA, payload: { userData } }))
          .catch((error) => ({ type: UserActionTypes.LOG_IN_FAILURE, payload: { error: error?.toString() } })))));
  // ---------------------------------------------------------------------------------------------------------------------------------------
  //
  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UPDATE_USER_DATA),
      switchMap((({ userData }) => this.authService.updateUserData(userData)
        .then(() => ({ type: UserActionTypes.UPDATE_USER_DATA_SUCCESS, payload: { userData } }))
        .catch((error) => ({ type: UserActionTypes.UPDATE_USER_DATA_FAILURE, payload: { error: error?.toString() } }))))));
  // ---------------------------------------------------------------------------------------------------------------------------------------
  //
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOG_OUT),
      mergeMap(
        () => this.authService.signOut()
          .then(() => ({ type: UserActionTypes.LOG_OUT_SUCCESS }))
          .catch((error) => ({ type: UserActionTypes.LOG_OUT_FAILURE, payload: { error: error?.toString() } })))));

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
