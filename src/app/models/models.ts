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
  // todo add encrypt and decrypt algorithm before and after sending
  cardSet: OOMICard[];
}

export interface Game {
  roundNumber: number;
  blackKetaCount: number;
  redKetaCount: number;
  blackCount: number;
  redCount: number;
  currentPlayer: Player;
  currentPlayerStartTIme: Date;
  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
}

export interface Table {
  tableName: string;
  game?: Game;
  player1ID?: User;
  player2ID?: User;
  player3ID?: User;
  player4ID?: User;
  pendingPlayers: User[];
  finalizedPlayers: User[];
  startedDatTime: Date;
  lastUpdateDateTime: Date;
}
