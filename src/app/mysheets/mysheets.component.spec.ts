import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysheetsComponent } from './mysheets.component';

describe('MysheetsComponent', () => {
  let component: MysheetsComponent;
  let fixture: ComponentFixture<MysheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
