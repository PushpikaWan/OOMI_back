import { OOMICard, PlayerID } from './enums';


export interface Player {
  playerId: PlayerID;
  cardSet: OOMICard[];
}
