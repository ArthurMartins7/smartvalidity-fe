import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../model/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/fornecedor';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Fornecedor>> {
    return this.httpClient.get<Array<Fornecedor>>(this.API + '/todos');

  }

  public consultarPorId(id: number): Observable <Fornecedor> {
    return this.httpClient.get<Fornecedor>(this.API + '/' + id);

  }


  public salvar(fornecedor: Fornecedor): Observable<any> {
    return this.httpClient.post<Fornecedor>(this.API + '/inserir', fornecedor)
  }

  public atualizar(fornecedor: Fornecedor):Observable<any> {
    return this.httpClient.put(this.API + '/atualizar', fornecedor)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + "/excluir/" + id);
  }
}
