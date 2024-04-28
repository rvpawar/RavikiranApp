import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookcreditComponent } from './cashbookcredit.component';

describe('CashbookcreditComponent', () => {
  let component: CashbookcreditComponent;
  let fixture: ComponentFixture<CashbookcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashbookcreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashbookcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
