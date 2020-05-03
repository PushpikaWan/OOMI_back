import { Component, Input, OnInit } from '@angular/core';

import { Card, CardOrientation } from '../models/enums';


@Component({
  selector: 'app-person-card-set',
  templateUrl: './person-card-set.component.html',
  styleUrls: ['./person-card-set.component.scss']
})

export class PersonCardSetComponent implements OnInit {

  @Input()
  orientation: CardOrientation;

  @Input()
  cardSet: Card[];

  internalCardMap: Map<string, Card> = new Map<string, Card>();

  constructor() { }

  ngOnInit(): void {
  }

}
