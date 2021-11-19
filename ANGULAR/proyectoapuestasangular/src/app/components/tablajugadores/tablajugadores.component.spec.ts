import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablajugadoresComponent } from './tablajugadores.component';

describe('TablajugadoresComponent', () => {
  let component: TablajugadoresComponent;
  let fixture: ComponentFixture<TablajugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablajugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablajugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
