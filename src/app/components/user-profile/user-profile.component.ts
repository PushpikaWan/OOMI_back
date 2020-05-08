import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { loginAction, logOutAction } from '../../store/actions/user.action';
import { getIsUserLoggedIn, getUserData } from '../../store/selectors/user.selector';
import { Observable } from 'rxjs';
import { User } from '../../models/models';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  googleSignIn() {
    this.store.dispatch(loginAction());
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(getIsUserLoggedIn));
    this.user$ = this.store.pipe(select(getUserData));
  }

  signOut() {
    this.store.dispatch(logOutAction());
  }
}
