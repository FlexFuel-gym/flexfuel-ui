import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePlanModalComponent } from './activate-plan-modal.component';

describe('ActivatePlanModalComponent', () => {
  let component: ActivatePlanModalComponent;
  let fixture: ComponentFixture<ActivatePlanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatePlanModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatePlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
