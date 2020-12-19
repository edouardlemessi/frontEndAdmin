import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMComponent } from './all-m.component';

describe('AllMComponent', () => {
  let component: AllMComponent;
  let fixture: ComponentFixture<AllMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
