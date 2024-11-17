import { Component } from '@angular/core';
import { CategoriaCadastro } from '../../models/categoria-cadastro';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../servicos/categoria.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-categoria',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-categoria.component.html',
  styleUrl: './cadastro-categoria.component.css'
})
export class CadastroCategoriaComponent {
  form: CategoriaCadastro;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ){
    this.form = new CategoriaCadastro();
  }

  salvar(){
    this.categoriaService.cadastrar(this.form).subscribe({
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
