import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraIrComponent } from './calculadora-ir.component';

describe('CalculadoraIrComponent', () => {
  let component: CalculadoraIrComponent;
  let fixture: ComponentFixture<CalculadoraIrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraIrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
