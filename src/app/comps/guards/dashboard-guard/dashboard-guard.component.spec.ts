import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGuardComponent } from './dashboard-guard.component';

describe('DashboardGuardComponent', () => {
  let component: DashboardGuardComponent;
  let fixture: ComponentFixture<DashboardGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
