import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertoCardComponent } from './concierto-card.component';

describe('ConciertoCardComponent', () => {
  let component: ConciertoCardComponent;
  let fixture: ComponentFixture<ConciertoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciertoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
