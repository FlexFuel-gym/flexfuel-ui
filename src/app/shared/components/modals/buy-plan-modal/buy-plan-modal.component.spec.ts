import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPlanModalComponent } from './buy-plan-modal.component';

describe('BuyPlanModalComponent', () => {
  let component: BuyPlanModalComponent;
  let fixture: ComponentFixture<BuyPlanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPlanModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
