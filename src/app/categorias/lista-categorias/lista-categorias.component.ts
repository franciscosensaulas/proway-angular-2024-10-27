import { Component } from '@angular/core';
import { CategoriaService } from '../../servicos/categoria.service';
import { CategoriaLista } from '../../models/categoria-lista';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css'
})
export class ListaCategoriasComponent {
  categorias: CategoriaLista[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,){}

  ngOnInit(){
    this.carregarCategorias();
  }

  private carregarCategorias() {
    this.categoriaService.obterTodas().subscribe({
      next: dados => this.categorias = dados,
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar as categorias");
      }
    });
  }

  apagar(id: string){
    this.categoriaService.apagar(id).subscribe({
      next: resposta => {
        alert('Categoria apagada com sucesso')
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível apagar a categoria")
      }
    })
  }

  editar(id: string){
    this.router.navigate([`/categorias/editar/${id}`])
  }
}

