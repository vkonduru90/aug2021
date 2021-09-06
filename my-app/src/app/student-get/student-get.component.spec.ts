import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetComponent } from './student-get.component';

describe('StudentGetComponent', () => {
  let component: StudentGetComponent;
  let fixture: ComponentFixture<StudentGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
