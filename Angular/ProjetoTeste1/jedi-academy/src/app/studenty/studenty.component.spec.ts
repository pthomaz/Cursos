import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentyComponent } from './studenty.component';

describe('StudentyComponent', () => {
  let component: StudentyComponent;
  let fixture: ComponentFixture<StudentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
