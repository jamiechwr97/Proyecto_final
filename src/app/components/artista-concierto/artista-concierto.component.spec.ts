import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaConciertoComponent } from './artista-concierto.component';

describe('ArtistaConciertoComponent', () => {
  let component: ArtistaConciertoComponent;
  let fixture: ComponentFixture<ArtistaConciertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaConciertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaConciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
