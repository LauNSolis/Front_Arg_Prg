import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgPrgComponent } from './arg-prg.component';

describe('ArgPrgComponent', () => {
  let component: ArgPrgComponent;
  let fixture: ComponentFixture<ArgPrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgPrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgPrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
