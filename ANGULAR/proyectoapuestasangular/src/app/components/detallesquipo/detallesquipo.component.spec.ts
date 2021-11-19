import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesquipoComponent } from './detallesquipo.component';

describe('DetallesquipoComponent', () => {
  let component: DetallesquipoComponent;
  let fixture: ComponentFixture<DetallesquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
