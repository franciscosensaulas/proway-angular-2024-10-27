import { Component } from '@angular/core';
import { DespesaEditar } from '../../models/despesa-editar';
import { FormsModule } from '@angular/forms';
import { DespesaService } from '../../servicos/despesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-despesa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-despesa.component.html',
  styleUrl: './editar-despesa.component.css'
})
export class EditarDespesaComponent {
  form: DespesaEditar
  id?: string

  constructor(
    private despesaService: DespesaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.form = new DespesaEditar();
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.despesaService.obterPorId(this.id).subscribe({
      next: despesa => {
        this.form.nome = despesa.nome;
        this.form.valor = despesa.valor
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar os dados da despesa");
      }
    })
  }

  salvar(){
    this.despesaService.atualizar(this.id!, this.form).subscribe({
      next: dado => {
        alert("Alteração realizada com sucesso");
        // Apresentar a listagem de despesas para o usuário
        this.router.navigate(["/despesas"]);
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível realizar a alteração");
      }
    })
  }
}
