import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitComponent } from './listproduit.component';

describe('ListproduitComponent', () => {
  let component: ListproduitComponent;
  let fixture: ComponentFixture<ListproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListproduitComponent]
    });
    fixture = TestBed.createComponent(ListproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
