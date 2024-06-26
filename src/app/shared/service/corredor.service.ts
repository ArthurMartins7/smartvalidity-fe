import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corredor } from '../model/corredor';

@Injectable({
  providedIn: 'root'
})

export class CorredorService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/corredor';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Corredor>> {
    return this.httpClient.get<Array<Corredor>>(this.API + '/todos');

  }

  public consultarPorId(id: number): Observable <Corredor> {
    return this.httpClient.get<Corredor>(this.API + '/' + id);

  }


  public salvar(corredor: Corredor): Observable<any> {
    return this.httpClient.post<Corredor>(this.API + '/inserir', corredor)
  }

  public atualizar(corredor: Corredor):Observable<any> {
    return this.httpClient.put(this.API + '/atualizar', corredor)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + "/excluir/" + id);
  }
}
