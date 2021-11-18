import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApuestaComponent } from './new-apuesta.component';

describe('NewApuestaComponent', () => {
  let component: NewApuestaComponent;
  let fixture: ComponentFixture<NewApuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
