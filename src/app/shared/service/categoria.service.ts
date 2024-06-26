import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/categoria';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Categoria>> {
    return this.httpClient.get<Array<Categoria>>(this.API + '/todas');

  }

  public consultarPorId(id: number): Observable <Categoria> {
    return this.httpClient.get<Categoria>(this.API + '/' + id);

  }


  public salvar(categoria: Categoria): Observable<any> {
    return this.httpClient.post<Categoria>(this.API + '/inserir', categoria)
  }

  public atualizar(categoria: Categoria):Observable<any> {
    return this.httpClient.put(this.API + '/atualizar', categoria)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + "/excluir/" + id);
  }
}
