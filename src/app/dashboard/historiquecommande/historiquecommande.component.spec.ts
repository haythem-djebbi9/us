import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquecommandeComponent } from './historiquecommande.component';

describe('HistoriquecommandeComponent', () => {
  let component: HistoriquecommandeComponent;
  let fixture: ComponentFixture<HistoriquecommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriquecommandeComponent]
    });
    fixture = TestBed.createComponent(HistoriquecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
