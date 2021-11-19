import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarjugadoresComponent } from './buscarjugadores.component';

describe('BuscarjugadoresComponent', () => {
  let component: BuscarjugadoresComponent;
  let fixture: ComponentFixture<BuscarjugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarjugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
