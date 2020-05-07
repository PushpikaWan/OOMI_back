import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPlayerCardSetComponent } from './other-player-card-set.component';

describe('OtherPlayerCardSetComponent', () => {
  let component: OtherPlayerCardSetComponent;
  let fixture: ComponentFixture<OtherPlayerCardSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPlayerCardSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPlayerCardSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
