import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corredor } from '../model/corredor';
import { CorredorSeletor } from '../model/seletor/corredorSeletor';

@Injectable({
  providedIn: 'root'
})

export class CorredorService {

  //http://localhost:8080/SmartValidity
  private readonly API = 'http://localhost:8080/SmartValidity/rest/restrito/corredor';

  constructor(private httpClient: HttpClient) { }

  public listarTodos(): Observable <Array<Corredor>> {
    return this.httpClient.get<Array<Corredor>>(this.API + '/todos');
  }

  public consultarPorId(id: number): Observable <Corredor> {
    return this.httpClient.get<Corredor>(this.API + '/' + id);
  }

  public salvar(corredor: Corredor): Observable<any> {
    return this.httpClient.post<Corredor>(this.API, corredor)
  }

  public atualizar(corredor: Corredor):Observable<boolean> {
    return this.httpClient.put<boolean>(this.API, corredor)
  }

  public excluir(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API +'/'+id);
  }
  
  consultarComSeletor(seletor: CorredorSeletor): Observable<Array<Corredor>>{
    return this.httpClient.post<Array<Corredor>>(this.API + '/filtro', seletor)
  }

  contarRegistros(seletor: CorredorSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-registros', seletor)
  }

  contarPaginas(seletor: CorredorSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor)
  }

}
