import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRestComponent } from './button-rest.component';

describe('ButtonRestComponent', () => {
  let component: ButtonRestComponent;
  let fixture: ComponentFixture<ButtonRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
