import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJoinDialogComponent } from './table-join-dialog.component';

describe('TableJoinDalogComponent', () => {
  let component: TableJoinDialogComponent;
  let fixture: ComponentFixture<TableJoinDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableJoinDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJoinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
