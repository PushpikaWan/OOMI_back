import { Component, Input, OnInit } from '@angular/core';
import { TablePosition } from '../../../models/enums';
import { Player } from '../../../models/models';


@Component({
  selector: 'app-other-player-card-set',
  templateUrl: './other-player-card-set.component.html',
  styleUrls: ['./other-player-card-set.component.scss']
})
export class OtherPlayerCardSetComponent implements OnInit {
  TablePosition = TablePosition;

  @Input()
  player: Player;

  @Input()
  tablePosition: TablePosition;

  constructor() { }

  ngOnInit(): void {
  }

}
