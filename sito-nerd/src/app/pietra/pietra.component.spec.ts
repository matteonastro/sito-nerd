import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PietraComponent } from './pietra.component';

describe('PietraComponent', () => {
  let component: PietraComponent;
  let fixture: ComponentFixture<PietraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PietraComponent]
    });
    fixture = TestBed.createComponent(PietraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
