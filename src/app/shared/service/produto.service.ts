import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutoSeletor } from '../model/seletor/produtoSeletor';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/restrito/produto';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(this.API + '/todos');

  }

  public consultarPorId(id: number): Observable <Produto> {
    return this.httpClient.get<Produto>(this.API + '/' + id);

  }


  public salvar(produto: Produto): Observable<any> {
    return this.httpClient.post<Produto>(this.API, produto)
  }

  public atualizar(produto: Produto):Observable<any> {
    return this.httpClient.put(this.API, produto)
  }

  public excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API +'/'+id);
  }

  consultarComSeletor(seletor: ProdutoSeletor): Observable<Array<Produto>>{
    return this.httpClient.post<Array<Produto>>(this.API + '/filtro', seletor)
  }

  contarRegistros(seletor: ProdutoSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/contar', seletor)
  }

  contarPaginas(seletor: ProdutoSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor)
  }

}
