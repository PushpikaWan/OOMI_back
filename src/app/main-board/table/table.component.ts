import { Component, OnInit } from '@angular/core';
import { Player } from '../models/models';
import { PlayerID } from '../models/enums';
import { ServerLogicService } from '../../core-server/server-logic.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  playerIDTypes = PlayerID;
  // todo player Id should come from server
  private PLAYER_ID = PlayerID.Player_01;

  selectedPlayer: Player;

  constructor(private serverLogicService: ServerLogicService) {
  }

  ngOnInit(): void {
    this.selectedPlayer = this.getPlayer(this.PLAYER_ID);
  }

  getPlayer(playerID: PlayerID): Player {
    return this.serverLogicService.getPlayer(playerID);
  }

}
