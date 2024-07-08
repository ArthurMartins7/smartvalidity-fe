
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../model/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/SmartValidity/rest/colaborador';

  public salvar(colaborador: Colaborador): Observable<any>{
    return this.httpClient.post<any>(this.API, colaborador)
  }

  public alterar(colaboradorEditado: Colaborador): Observable<any>{
    return this.httpClient.put<any>(this.API, colaboradorEditado)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API +"/"+id);
  }

  public consultarPorId(id:number): Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(this.API+"/"+id);
  }

  public consultarTodos(): Observable <Array<Colaborador>> {
    return this.httpClient.get<Array<Colaborador>>(this.API + '/todos');

  }

}
