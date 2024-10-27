import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  standalone: true,
  imports: [],
  templateUrl: './exemplo01.component.html',
  styleUrl: './exemplo01.component.css'
})
export class Exemplo01Component {
  nome: string = "Francisco"
  sobrenome: string = "Lucas Janesch Lange Sens"
  nomeCompleto: string = ""
  idade: number = 30
  anoNascimento?: number
  geracao?: string

  ngOnInit() {
    this.nomeCompleto = `${this.nome} ${this.sobrenome}`;
    // this.anoNascimento = 2024 - this.idade;
  }

  calcular() {
    this.anoNascimento = 2024 - this.idade;
    if (this.anoNascimento >= 1928 && this.anoNascimento <= 1945)
      this.geracao = "Geração Silenciosa";
    else if (this.anoNascimento <= 1964)
      this.geracao = "Baby Boomers";
    else if (this.anoNascimento <= 1980)
      this.geracao = "Geração X";
    else if (this.anoNascimento <= 1996)
      this.geracao = "Geração Y";
    else if (this.anoNascimento <= 2012)
      this.geracao = "Geração Z";
    else
      this.geracao = "Geração Alpha";
  }
}
