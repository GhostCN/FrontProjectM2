import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvConsultationComponent } from './nouv-consultation.component';

describe('NouvConsultationComponent', () => {
  let component: NouvConsultationComponent;
  let fixture: ComponentFixture<NouvConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
