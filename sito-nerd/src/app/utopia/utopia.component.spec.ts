import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtopiaComponent } from './utopia.component';

describe('UtopiaComponent', () => {
  let component: UtopiaComponent;
  let fixture: ComponentFixture<UtopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtopiaComponent]
    });
    fixture = TestBed.createComponent(UtopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
