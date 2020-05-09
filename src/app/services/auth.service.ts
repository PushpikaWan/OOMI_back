import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {}

  getAlreadySignedUser(): Observable<User> {
    // Get the auth state, then fetch the Firestore user document or return null
    return this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignIn(): Promise<User> {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    const userData = {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName,
      photoURL: credential.user.photoURL
    };
    await this.updateUserData(userData).catch((error) => throwError(error));
    return of(userData).toPromise();
  }

  private updateUserData(userData) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${userData.uid}`);
    return userRef.set(userData, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut().catch(
      // todo log error - removed state changes for failures
    );
    await this.router.navigate(['/']);
  }
}
