import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { loginAction, logOutAction } from '../../store/actions/user.action';
import { getIsUserLoggedIn, getUserData } from '../../store/selectors/user.selector';
import { Observable } from 'rxjs';
import { User } from '../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { TableCreateDialogComponent } from '../waiting-room/table-create-dalog/table-create-dialog.component';
import { TableJoinDialogComponent } from '../waiting-room/table-join-dalog/table-join-dialog.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private readonly store: Store<AppState>, private readonly dialog: MatDialog) { }

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

  createGame() {
    const dialogRef = this.dialog.open(TableCreateDialogComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe();
  }

  joinGame() {
    const dialogRef = this.dialog.open(TableJoinDialogComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe();
  }
}
