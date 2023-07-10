import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currentmodule1Component } from './currentmodule1.component';

describe('Currentmodule1Component', () => {
  let component: Currentmodule1Component;
  let fixture: ComponentFixture<Currentmodule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Currentmodule1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currentmodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
