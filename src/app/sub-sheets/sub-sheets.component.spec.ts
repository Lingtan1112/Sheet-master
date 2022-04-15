import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSheetsComponent } from './sub-sheets.component';

describe('SubSheetsComponent', () => {
  let component: SubSheetsComponent;
  let fixture: ComponentFixture<SubSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
