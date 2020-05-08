import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseConfig } from '../config/private-configuration';


export const FIRE_MODULES = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule
];
