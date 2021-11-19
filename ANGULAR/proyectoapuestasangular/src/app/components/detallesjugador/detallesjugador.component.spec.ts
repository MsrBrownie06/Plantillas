import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesjugadorComponent } from './detallesjugador.component';

describe('DetallesjugadorComponent', () => {
  let component: DetallesjugadorComponent;
  let fixture: ComponentFixture<DetallesjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
