import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborador-folha-pagamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './colaborador-folha-pagamento.component.html',
  styleUrl: './colaborador-folha-pagamento.component.css'
})
export class ColaboradorFolhaPagamentoComponent {
  nome: string = "";
  quantidadeHoras?: number;
  valorHora: number = 12.50;
  descontos?: number;
  acrescimos?: number;
  salarioBruto?: number;
  salarioLiquido?: number;

  calcularSalario() {
    debugger;
    if (this.quantidadeHoras === undefined || this.quantidadeHoras === null) {
      alert("Quantidade de horas deve ser preenchida");
      return;
    }

    if (this.descontos === undefined || this.descontos === null) {
      alert("Desconto deve ser preenchido");
      return;
    }

    if (this.acrescimos === undefined || this.acrescimos === null) {
      alert("Acréscimos deve ser preenchido");
      return;
    }

    this.salarioBruto = this.valorHora * this.quantidadeHoras;
    this.salarioLiquido = this.salarioBruto - this.descontos + this.acrescimos;
  }
}
/* Criar um componente chamado CalculadoraJuros
    - Criar a rota para acessar /calculadora-juros
    - Colocar os seguintes campos:
      - quantidade de parcelas
      - valor da parcela
      - valor do imóvel
    - Calcular e apresentar o valor total pago no emprétimo com uma função chamada calcularEmprestimo
    - Calcular e apresentar o valor total pago de juros com uma função chamada calcularJuros 
*/