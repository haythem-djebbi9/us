import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoirComponent } from './favoir.component';

describe('FavoirComponent', () => {
  let component: FavoirComponent;
  let fixture: ComponentFixture<FavoirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoirComponent]
    });
    fixture = TestBed.createComponent(FavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
