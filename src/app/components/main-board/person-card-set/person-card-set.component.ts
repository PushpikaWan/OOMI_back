import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { OOMICard } from '../../../models/enums';
import { getShortNameOfCard } from '../../../utils/common';
import { Player } from '../../../models/models';


@Component({
  selector: 'app-person-card-set',
  templateUrl: './person-card-set.component.html',
  styleUrls: ['./person-card-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonCardSetComponent implements OnInit, AfterViewInit {

  @Input()
  player: Player;
  cardMap: Map<number, OOMICard> = new Map<number, OOMICard>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private setCardMap() {
    this.player.cardSet.forEach((val, index) => {
      this.cardMap.set(index, val);
    });
  }

  getCardName(card: OOMICard) {
    return getShortNameOfCard(card);
  }

  ngAfterViewInit(): void {
    this.setCardMap();
    this.changeDetectorRef.detectChanges();
  }
}
