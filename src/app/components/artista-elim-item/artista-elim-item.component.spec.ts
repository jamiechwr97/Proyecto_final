import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaElimItemComponent } from './artista-elim-item.component';

describe('ArtistaElimItemComponent', () => {
  let component: ArtistaElimItemComponent;
  let fixture: ComponentFixture<ArtistaElimItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaElimItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaElimItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
