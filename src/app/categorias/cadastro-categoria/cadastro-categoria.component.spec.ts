import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCategoriaComponent } from './cadastro-categoria.component';

describe('CadastroCategoriaomponent', () => {
  let component: CadastroCategoriaComponent;
  let fixture: ComponentFixture<CadastroCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
