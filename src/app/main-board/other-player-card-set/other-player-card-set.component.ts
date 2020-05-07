import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/models';
import { PlayerID } from '../models/enums';


@Component({
  selector: 'app-other-player-card-set',
  templateUrl: './other-player-card-set.component.html',
  styleUrls: ['./other-player-card-set.component.scss']
})
export class OtherPlayerCardSetComponent implements OnInit {
  playerIDTypes = PlayerID;

  @Input()
  player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
