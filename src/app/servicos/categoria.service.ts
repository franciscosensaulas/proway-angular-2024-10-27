import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaLista } from '../models/categoria-lista';
import { CategoriaCadastro } from '../models/categoria-cadastro';
import { CategoriaEditar } from '../models/categoria-editar';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;}
   
  obterTodas(): Observable<CategoriaLista[]>{
    return this.httpClient.get<CategoriaLista[]>(`${this.apiUrl}/categorias`);
  }

  cadastrar(categoriaCadastro: CategoriaCadastro): Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/categorias`, categoriaCadastro);
  }

  apagar(id: string): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}http://localhost:3000/categorias/${id}`);
  }

  obterPorId(id: string): Observable<CategoriaLista>{
    return this.httpClient.get<CategoriaLista>(`${this.apiUrl}/categorias/${id}`)
  }

  editar(id: string, categoriaEditar: CategoriaEditar){
  return this.httpClient.put<any>(`${this.apiUrl}/categorias/${id}`, categoriaEditar);
  }
}
