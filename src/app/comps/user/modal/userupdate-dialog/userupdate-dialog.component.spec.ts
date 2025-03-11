import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdateDialogComponent } from './userupdate-dialog.component';

describe('UserupdateDialogComponent', () => {
  let component: UserupdateDialogComponent;
  let fixture: ComponentFixture<UserupdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserupdateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserupdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
