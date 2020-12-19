import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommComponent } from './all-comm.component';

describe('AllCommComponent', () => {
  let component: AllCommComponent;
  let fixture: ComponentFixture<AllCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
