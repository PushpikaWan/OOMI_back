import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateDialogComponent } from './table-create-dialog.component';

describe('TableCreateDalogComponent', () => {
  let component: TableCreateDialogComponent;
  let fixture: ComponentFixture<TableCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
