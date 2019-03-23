import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvPatientComponent } from './nouv-patient.component';

describe('NouvPatientComponent', () => {
  let component: NouvPatientComponent;
  let fixture: ComponentFixture<NouvPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
