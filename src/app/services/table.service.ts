import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Table, User } from '../models/models';
import { AuthService } from './auth.service';

// todo add user logged state before all call -> this.afAuth.authState

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private user: User;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {

    this.authService.getAlreadySignedUser().pipe(take(1)).subscribe(userData => {
      if (userData !== null) {
        this.user = userData;
      }
    });
  }

  createTable(tableData: Table): Observable<any> {
    const tableDataRef = this.afs.collection('tables').doc(tableData.tableName);
    return tableDataRef.get().pipe(
      take(1),
      map(docSnapshot => {
        if (docSnapshot.exists) {
          throw new Error(`Please choose another name. ${tableData.tableName} is already exists`);
        } else {
          return tableDataRef.set(tableData, { merge: true })
            .then(() => tableData)
            .catch(error => Promise.reject(error));
        }
      })
    );
  }

  joinTable(tableName: string): Observable<any> {
    const tableDataRef = this.afs.collection('tables').doc(tableName);
    return tableDataRef.get().pipe(
      take(1),
      map(docSnapshot => {
        if (!docSnapshot.exists) {
          throw new Error(`Please try again. This ${tableName} table is not exists`);
        } else {
          tableDataRef.update({
            pendingPlayers: firebase.firestore.FieldValue.arrayUnion(this.user)
          }).catch(error => Promise.reject(error));
        }
      })
    );
  }

  // todo handle network and unexpected errors here
  checkConfirmation(tableName: string): Observable<Table> {
    const tableDataRef = this.afs.collection('tables').doc<Table>(tableName);
    return tableDataRef.snapshotChanges()
      .pipe(
        map(actions => actions.payload.data() as Table),
        filter(tableData => tableData.finalizedPlayers.length > 0),
        map(tableData => tableData.finalizedPlayers.includes(this.user) ? tableData : null)
      );
  }

  listeningForPendingPlayers(tableName: string): Observable<Table> {
    console.log('table name', tableName);
    const tableDataRef = this.afs.collection('tables').doc<Table>(tableName);
    return tableDataRef.snapshotChanges()
      .pipe(
        map(actions => actions.payload.data() as Table),
        map(tableData => tableData.finalizedPlayers.includes(this.user) ? tableData : null)
      );
  }

}
