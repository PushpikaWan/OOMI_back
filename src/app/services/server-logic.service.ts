import { Injectable } from '@angular/core';

import { OOMICard, PlayerID } from '../models/enums';
import { shuffle } from '../utils/common';
import { Player } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class ServerLogicService {
  players: Player[] = [];

  constructor() {
    this.shuffleCards();
  }

  private shuffleCards() {
    // get all cards from enum
    const keys = Object.keys(OOMICard).filter(k => typeof OOMICard[k as any] === 'number'); // ["A", "B"]
    // const values = keys.map(k => OOMICard[k as any]); // [0, 1]
    const shuffledArray = shuffle(keys);
    this.players.push({ playerId: PlayerID.Player_01, cardSet: shuffledArray.slice(0, 8) });
    this.players.push({ playerId: PlayerID.Player_02, cardSet: shuffledArray.slice(8, 16) });
    this.players.push({ playerId: PlayerID.Player_03, cardSet: shuffledArray.slice(16, 24) });
    this.players.push({ playerId: PlayerID.Player_04, cardSet: shuffledArray.slice(24, 32) });
  }

  getPlayer(playerId: PlayerID): Player {
    // todo return proper object or change the logic
    let selectedPlayer = { playerId: PlayerID.Player_BOT, cardSet: [] };
    this.players.forEach(
      player => {
        if (player.playerId === playerId) {
          selectedPlayer = player;
        }
      }
    );
    return selectedPlayer;
  }
}
