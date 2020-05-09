import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Table } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {}

  createTable(tableData: Table) {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return new Promise<Table>((resolve, reject) => {
            this.afs
              .collection('tables')
              .add(tableData)
              .then(res => {}, err => reject(err));
          });
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

}
