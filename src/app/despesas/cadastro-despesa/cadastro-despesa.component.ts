import { Component } from '@angular/core';
import { DespesaCadastro } from '../../models/despesa-cadastro';
import { FormsModule } from '@angular/forms';
import { DespesaService } from '../../servicos/despesa.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-despesa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-despesa.component.html',
  styleUrl: './cadastro-despesa.component.css'
})
export class CadastroDespesaComponent {
  form: DespesaCadastro;

  constructor(
    private despesaService: DespesaService,
    private router: Router
  ){
    this.form = new DespesaCadastro();
  }

  salvar(){
    this.despesaService.cadastrar(this.form).subscribe({
      next: dado => {
        alert("Cadastro realizado com sucesso");
        // Apresentar a listagem de despesas para o usuário
        this.router.navigate(["/despesas"]);
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível realizar o cadastro");
      }
    })
  }
}
