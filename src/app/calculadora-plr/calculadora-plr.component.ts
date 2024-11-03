import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraIrComponent } from "../calculadora-ir/calculadora-ir.component";

class CalculoPlr {
  salarioBruto?: number;
  multiplicador?: number
  valorPlrBruto?: number
}

type Faixa = {
  limiteInferior: number;
  limiteSuperior?: number;
  aliquota: number;
  deducao: number;
};


@Component({
  selector: 'app-calculadora-plr',
  standalone: true,
  imports: [
    FormsModule,
    CalculadoraIrComponent
  ],
  templateUrl: './calculadora-plr.component.html',
  styleUrl: './calculadora-plr.component.css'
})
export class CalculadoraPlrComponent {
  form = new CalculoPlr()

  calcularValorPlrBruto() {
    if (this.form.salarioBruto === undefined) {
      alert("Salário bruto deve ser preenchido");
      return;
    }
    if (this.form.multiplicador === undefined) {
      alert("Multiplicador deve ser preenchido");
      return;
    }

    let valorPlrBruto = this.form.salarioBruto * this.form.multiplicador;
    this.form.valorPlrBruto = valorPlrBruto;
  }

  calcularValorPlrLiquido() { }
}
