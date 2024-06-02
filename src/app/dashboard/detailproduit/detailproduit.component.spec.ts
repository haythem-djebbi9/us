import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproduitComponent } from './detailproduit.component';

describe('DetailproduitComponent', () => {
  let component: DetailproduitComponent;
  let fixture: ComponentFixture<DetailproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailproduitComponent]
    });
    fixture = TestBed.createComponent(DetailproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
