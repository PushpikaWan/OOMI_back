import { OOMICard, PlayerID } from './enums';


export interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
  customData?: string;
}

export interface Player {
  playerId: PlayerID;
  cardSet: OOMICard[];
}
