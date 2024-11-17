import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DespesaLista } from '../models/despesa-lista';
import { DespesaCadastro } from '../models/despesa-cadastro';
import { DespesaEditar } from '../models/despesa-editar';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private apiUrl: string;

  /*
    HttpClient é a classe que utilizamos para fazer as requisições
    para o back-end, ou seja, necessito de algum dado do banco de dados, 
    é necessário fazer uma requisição para o back. 
  */
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  // Método que fará a requisição para o back-end para consultar todas as despesas
  obterTodas(): Observable<DespesaLista[]> {
    // GET => é o verbo utilizado para consultar registro(s) do back-end
    return this.httpClient.get<DespesaLista[]>(`${this.apiUrl}/despesas`);
  }

  // Método que fará a requsição para o back-end cadastrando a despesa
  cadastrar(despesaCadastro: DespesaCadastro): Observable<any>{
    // POST => é o verbo utilizado para cadastrar registro que será enviado
    //  para o back-end e armazenado no banco de dados
    return this.httpClient.post<any>(`${this.apiUrl}/despesas`, despesaCadastro);
  }

  // Método que fará a requisição para o back-end apagando a despesa
  apagar(id: string): Observable<any>{
    // DELETE => é verbo utilizado para apagar registro, sendo enviado para o back-end o id na URL
    // que será consultado se o registro existe ou não e em caso positivo o mesmo será apagado.
    return this.httpClient.delete(`${this.apiUrl}/despesas/${id}`);
  }

  obterPorId(id: string): Observable<DespesaLista>{
    return this.httpClient.get<DespesaLista>(`${this.apiUrl}/despesas/${id}`);
  }

  atualizar(id: string, despesaEditar: DespesaEditar){
    return this.httpClient.put<any>(`${this.apiUrl}/despesas/${id}`, despesaEditar);
  }
}
