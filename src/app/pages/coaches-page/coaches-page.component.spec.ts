import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesPageComponent } from './coaches-page.component';

describe('CoachesPageComponent', () => {
  let component: CoachesPageComponent;
  let fixture: ComponentFixture<CoachesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
