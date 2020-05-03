import { Card, PlayerID } from './enums';


export interface Player {
  playerId: PlayerID;
  cardSet: Card[];
}
