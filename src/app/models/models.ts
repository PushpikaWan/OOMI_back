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

export interface Table {
  tableName: string;
  player_1?: Player;
  player_2?: Player;
  player_3?: Player;
  player_4?: Player;
}
