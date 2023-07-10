import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currentmodule2Component } from './currentmodule2.component';

describe('Currentmodule2Component', () => {
  let component: Currentmodule2Component;
  let fixture: ComponentFixture<Currentmodule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Currentmodule2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currentmodule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
