import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertoElimItemComponent } from './concierto-elim-item.component';

describe('ConciertoElimItemComponent', () => {
  let component: ConciertoElimItemComponent;
  let fixture: ComponentFixture<ConciertoElimItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConciertoElimItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciertoElimItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
