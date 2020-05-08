import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PlayerID, TablePosition } from '../../../models/enums';
import { ServerLogicService } from '../../../services/server-logic.service';
import { AppState } from '../../../store/states/app.state';
import { Player } from '../../../models/models';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  playerIDTypes = PlayerID;
  TablePosition = TablePosition;

  // todo player Id should come from server
  private PLAYER_ID = PlayerID.Player_01;

  selectedPlayer: Player;

  constructor(private store: Store<AppState>, private serverLogicService: ServerLogicService) {
  }

  ngOnInit(): void {
    this.selectedPlayer = this.getPlayer(this.PLAYER_ID);
  }

  getPlayer(playerID: PlayerID): Player {
    return this.serverLogicService.getPlayer(playerID);
  }

}
