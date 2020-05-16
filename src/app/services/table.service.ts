import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Table } from '../models/models';

// todo add user logged state before all call -> this.afAuth.authState

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {}

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

}
