import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaapuestaComponent } from './nuevaapuesta.component';

describe('NuevaapuestaComponent', () => {
  let component: NuevaapuestaComponent;
  let fixture: ComponentFixture<NuevaapuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaapuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaapuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
