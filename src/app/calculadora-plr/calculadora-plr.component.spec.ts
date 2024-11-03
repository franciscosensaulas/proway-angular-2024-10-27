import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPlrComponent } from './calculadora-plr.component';

describe('CalculadoraPlrComponent', () => {
  let component: CalculadoraPlrComponent;
  let fixture: ComponentFixture<CalculadoraPlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraPlrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
