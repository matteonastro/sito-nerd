import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fataComponent } from './fata.component';

describe('FataComponent', () => {
  let component: fataComponent;
  let fixture: ComponentFixture<fataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fataComponent]
    });
    fixture = TestBed.createComponent(fataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
