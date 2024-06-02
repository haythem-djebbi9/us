import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcouleurComponent } from './listcouleur.component';

describe('ListcouleurComponent', () => {
  let component: ListcouleurComponent;
  let fixture: ComponentFixture<ListcouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcouleurComponent]
    });
    fixture = TestBed.createComponent(ListcouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
