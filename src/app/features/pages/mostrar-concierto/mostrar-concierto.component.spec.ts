import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarConciertoComponent } from './mostrar-concierto.component';

describe('MostrarConciertoComponent', () => {
  let component: MostrarConciertoComponent;
  let fixture: ComponentFixture<MostrarConciertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarConciertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarConciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
