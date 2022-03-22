import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertoItemComponent } from './concierto-item.component';

describe('ConciertoItemComponent', () => {
  let component: ConciertoItemComponent;
  let fixture: ComponentFixture<ConciertoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciertoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
