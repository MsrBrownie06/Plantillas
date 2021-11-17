import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonajeComponent } from './new-personaje.component';

describe('NewPersonajeComponent', () => {
  let component: NewPersonajeComponent;
  let fixture: ComponentFixture<NewPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
