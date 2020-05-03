import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { Card, CardOrientation } from '../models/enums';
import { Player } from '../models/models';
import { getShortNameOfCard } from '../../utils/common';


@Component({
  selector: 'app-person-card-set',
  templateUrl: './person-card-set.component.html',
  styleUrls: ['./person-card-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonCardSetComponent implements OnInit, AfterViewInit {

  @Input()
  orientation: CardOrientation;
  @Input()
  player: Player;
  cardMap: Map<number, Card> = new Map<number, Card>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private setCardMap() {
    this.player.cardSet.forEach((val, index) => {
      this.cardMap.set(index, val);
    });
  }

  getCardName(card: Card) {
    return getShortNameOfCard(card);
  }

  ngAfterViewInit(): void {
    this.setCardMap();
    this.changeDetectorRef.detectChanges();
  }
}
