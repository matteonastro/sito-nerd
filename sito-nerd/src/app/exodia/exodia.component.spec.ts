import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodiaComponent } from './exodia.component';

describe('ExodiaComponent', () => {
  let component: ExodiaComponent;
  let fixture: ComponentFixture<ExodiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExodiaComponent]
    });
    fixture = TestBed.createComponent(ExodiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
