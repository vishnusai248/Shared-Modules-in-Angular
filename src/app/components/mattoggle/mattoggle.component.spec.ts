import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattoggleComponent } from './mattoggle.component';

describe('MattoggleComponent', () => {
  let component: MattoggleComponent;
  let fixture: ComponentFixture<MattoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
