import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { EntradaLista } from '../models/entrada-lista';
import { EntradaCadastro } from '../models/entrada-cadastro';
import { EntradaEditar } from '../models/entrada-editar';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  obterTodas(): Observable<EntradaLista[]> {
    return this.httpClient.get<EntradaLista[]>(`${this.apiUrl}/entradas`);
  }

  cadastrar(entradaCadastro: EntradaCadastro): Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/entradas`, entradaCadastro);
  }

  apagar(id: string): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/entradas/${id}`);
  }

  obterPorId(id: string): Observable<EntradaLista>{
    return this.httpClient.get<EntradaLista>(`${this.apiUrl}/entradas/${id}`);
  }

  atualizar(id: string, entradaEditar: EntradaCadastro){
    return this.httpClient.put<any>(`${this.apiUrl}/entradas/${id}`, entradaEditar);
  }
}
