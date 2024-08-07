import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { CategoriaSeletor } from '../model/seletor/categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/restrito/categoria';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Categoria>> {
    return this.httpClient.get<Array<Categoria>>(this.API + '/todas');

  }

  public consultarPorId(id: number): Observable <Categoria> {
    return this.httpClient.get<Categoria>(this.API + '/' + id);

  }


  public salvar(categoria: Categoria): Observable<any> {
    return this.httpClient.post<Categoria>(this.API, categoria)
  }

  public atualizar(categoria: Categoria):Observable<any> {
    return this.httpClient.put(this.API, categoria)
  }

  public excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API +'/'+id);
  }

  consultarComSeletor(seletor: CategoriaSeletor): Observable<Array<Categoria>>{
    return this.httpClient.post<Array<Categoria>>(this.API + '/filtro', seletor)
  }

  contarRegistros(seletor: CategoriaSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/contar', seletor)
  }

  contarPaginas(seletor: CategoriaSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor)
  }

}
