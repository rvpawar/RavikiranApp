import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookregisterComponent } from './cashbookregister.component';

describe('CashbookregisterComponent', () => {
  let component: CashbookregisterComponent;
  let fixture: ComponentFixture<CashbookregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashbookregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashbookregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
