import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorFolhaPagamentoComponent } from './colaborador-folha-pagamento.component';

describe('ColaboradorFolhaPagamentoComponent', () => {
  let component: ColaboradorFolhaPagamentoComponent;
  let fixture: ComponentFixture<ColaboradorFolhaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorFolhaPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorFolhaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
