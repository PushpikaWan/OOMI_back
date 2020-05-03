import { Component, OnInit } from '@angular/core';
import { Player } from '../models/models';
import { Card, PlayerID } from '../models/enums';
import { shuffle } from '../../utils/common';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players: Player[] = [];

  constructor() {
    this.shuffleCards();
  }

  ngOnInit(): void {
  }

  private shuffleCards() {
    // get all cards from enum
    const keys = Object.keys(Card).filter(k => typeof Card[k as any] === 'number'); // ["A", "B"]
    // const values = keys.map(k => Card[k as any]); // [0, 1]
    const shuffledArray = shuffle(keys);
    this.players.push({ playerId: PlayerID.Player_01, cardSet: shuffledArray.slice(0, 13) });
    this.players.push({ playerId: PlayerID.Player_02, cardSet: shuffledArray.slice(13, 26) });
    this.players.push({ playerId: PlayerID.Player_03, cardSet: shuffledArray.slice(26, 39) });
    this.players.push({ playerId: PlayerID.Player_04, cardSet: shuffledArray.slice(39, 52) });
  }

}
