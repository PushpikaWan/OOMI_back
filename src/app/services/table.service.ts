import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Table } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {}

  createTable(tableData: Table): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          const tableDataRef = this.afs.collection('tables').doc(tableData.tableName);
          return tableDataRef.set(tableData, { merge: true })
            .then(() => of(tableData))
            .catch(error => throwError(error));
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

}
