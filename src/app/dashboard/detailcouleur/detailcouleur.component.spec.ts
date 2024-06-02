import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcouleurComponent } from './detailcouleur.component';

describe('DetailcouleurComponent', () => {
  let component: DetailcouleurComponent;
  let fixture: ComponentFixture<DetailcouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcouleurComponent]
    });
    fixture = TestBed.createComponent(DetailcouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
