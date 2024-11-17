import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaEditar } from '../../models/categoria-editar';
import { CategoriaService } from '../../servicos/categoria.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.css'
})
export class EditarCategoriaComponent {
  form: CategoriaEditar;
  id?: string;

  constructor(
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.form = new CategoriaEditar(); 
  };

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.categoriaService.obterPorId(this.id).subscribe({
      next: categoria => {
        this.form.nome = categoria.nome;
        this.form.valor = categoria.valor
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar os dados da categoria");
      }
    })
  }

  salvar(){
    this.categoriaService.editar(this.id!, this.form).subscribe({
      next: dado => {
        alert("Cadastro realizado com sucesso");
        this.router.navigate(["/lista-categorias"]);
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível realizar o cadastro");
      }
    })
  }
}
