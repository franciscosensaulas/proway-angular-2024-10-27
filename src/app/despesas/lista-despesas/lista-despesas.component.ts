import { Component } from '@angular/core';
import { DespesaLista } from '../../models/despesa-lista';
import { DespesaService } from '../../servicos/despesa.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-despesas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-despesas.component.html',
  styleUrl: './lista-despesas.component.css'
})
export class ListaDespesasComponent {
  despesas: DespesaLista[] = [];

  // DespesaService é a classe que fará a comunicação com o Back-end
  constructor(
    private despesaService: DespesaService,
    private router: Router,
  ){}

  ngOnInit(){
    // Chamada do método obterTodas
    // Subscribe para o obterTodas fará a requisição para 
    // consutlar todas as depseas
    this.carregarDespesas();
  }

  private carregarDespesas() {
    this.despesaService.obterTodas().subscribe({
      // next é executado após o término da requisição em caso de sucesso
      next: dados => this.despesas = dados,
      // error é executado após o término da requisição em qualquer outra caso que não seja sucesso
      error: erro => {
        // Apresentar mensagem de erro no console do navegador de internet
        console.error(erro);
        // Apresentar mensagem para o usuário de feeback que n foi possível carregar as despesas.
        alert("Não foi possível carregar as despesas");
      }
    });
  }

  apagar(id: string){
    this.despesaService.apagar(id).subscribe({
      next: resposta => {
        alert('Despesa apagada com sucesso')
        this.carregarDespesas();
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível apagar a despesa")
      }
    })
  }

  editar(id: string){
    this.router.navigate([`/despesas/editar/${id}`])
  }
}
