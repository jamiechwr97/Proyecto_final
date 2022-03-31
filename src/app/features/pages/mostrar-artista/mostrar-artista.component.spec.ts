import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarArtistaComponent } from './mostrar-artista.component';

describe('MostrarArtistaComponent', () => {
  let component: MostrarArtistaComponent;
  let fixture: ComponentFixture<MostrarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
