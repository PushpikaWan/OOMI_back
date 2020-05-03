import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardSetComponent } from './person-card-set.component';

describe('PersonCardSetComponent', () => {
  let component: PersonCardSetComponent;
  let fixture: ComponentFixture<PersonCardSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCardSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
