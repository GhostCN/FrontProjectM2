import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsComponent } from './update-cons.component';

describe('UpdateConsComponent', () => {
  let component: UpdateConsComponent;
  let fixture: ComponentFixture<UpdateConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
