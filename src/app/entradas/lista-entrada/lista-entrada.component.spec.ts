import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntradaComponent } from './lista-entrada.component';

describe('ListaEntradaComponent', () => {
  let component: ListaEntradaComponent;
  let fixture: ComponentFixture<ListaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEntradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
