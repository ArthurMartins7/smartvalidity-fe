import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemProduto } from '../model/itemProduto';
import { ItemProdutoSeletor } from '../model/seletor/itemProduto.seletor';

@Injectable({
  providedIn: 'root'
})

export class ItemProdutoService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/restrito/itemProduto';

  constructor(private httpClient: HttpClient) { }
  public listarTodos(): Observable <Array<ItemProduto>> {
    return this.httpClient.get<Array<ItemProduto>>(this.API + '/todos');

  }

  public salvar(itemProduto: ItemProduto): Observable<any> {
    return this.httpClient.post<ItemProduto>(this.API, itemProduto)
  }

  public atualizar(itemProduto: ItemProduto):Observable<any> {
    return this.httpClient.put(this.API, itemProduto)
  }

  public consultarComSeletor(seletor: ItemProdutoSeletor): Observable <Array<ItemProduto>> {
    return this.httpClient.post<Array<ItemProduto>>(this.API + '/filtro', seletor)
  }

public contarTotalRegistro(seletor:ItemProdutoSeletor):Observable<number>{
  return this.httpClient.post<number>(this.API + '/contar',seletor);
}

public contarPaginas(seletor: ItemProdutoSeletor):Observable<number> {
  return this.httpClient.post<number>(this.API + '/total-pagina', seletor);
}

  excluir(id: number): Observable<any>{
    return this.httpClient.delete(this.API + '/' + id);
  }

}
