import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookdebitComponent } from './cashbookdebit.component';

describe('CashbookdebitComponent', () => {
  let component: CashbookdebitComponent;
  let fixture: ComponentFixture<CashbookdebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashbookdebitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashbookdebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
