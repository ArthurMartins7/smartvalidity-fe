import { Component, OnInit } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CorredorSeletor } from '../../shared/model/seletor/corredorSeletor';


@Component({
  selector: 'app-corredor-listagem',
  templateUrl: './corredor-listagem.component.html',
  styleUrls: ['./corredor-listagem.component.scss']
})
export class CorredorListagemComponent implements OnInit{

  public corredor: Corredor = new Corredor();
  public corredores: Corredor[] = [];
  public idCorredor: number;

  public seletor: CorredorSeletor = new CorredorSeletor();

  public totalPaginas: number;
  public totalRegistros: number;
  public offset: number;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(
    private corredorService: CorredorService,
    private router: Router,
    private httpClient: HttpClient,
  ){ }

  ngOnInit(): void {
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;

    this.consultarTodosCorredores();

    this.pesquisar();
    this.contarPaginas();

  }

  public consultarTodosCorredores() {
    this.corredorService.listarTodos().subscribe(
      (resultado) => {
        this.corredores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os corredores', erro.error.mensagem);
      }
    );
  }

  public pesquisar() {
    this.corredorService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.corredores = resultado;
        //this.contarRegistros()
      },
      (erro) => {
        console.error('Erro ao buscar corredores', erro.error.mensagem);
      }
    );
    this.contarPaginas()
  }

  public limpar() {
    this.seletor = new CorredorSeletor();
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
  }

  public excluir(corredorSelecionado: Corredor) {
    Swal.fire({
      title: 'Deseja excluir o corredor?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.corredorService.excluir(corredorSelecionado.idCorredor).subscribe(
          (resultado) => {
            this.consultarTodosCorredores(); // Atualiza a lista após exclusão
            Swal.fire('Sucesso!', 'Excluído com sucesso.', 'success');
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir o corredor: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idCorredorSelecionado: number) {
    this.router.navigate(['home/corredor/corredor-detalhe/', idCorredorSelecionado]);
  }

  contarRegistros(){
    this.corredorService.contarRegistros(this.seletor).subscribe(
      (count: number) => {
        this.totalRegistros = count
      },
      erro => {
        console.log('Erro ao contar registros de corredor', erro.error.mensagem)
      }
    )
  }

  atualizarPaginacao() {
    this.contarPaginas();
    this.pesquisar();
  }

  proximaPg(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPg(){
    this.seletor.pagina--;
    this.pesquisar();
  }

  irParaPagina(indicePagina: number) {
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

   // Método para criar um array de páginas para ser utilizado no ngFor do HTML
   criarArrayPaginas(): any[] {
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
  }


  contarPaginas(){
    this.corredorService.contarPaginas(this.seletor).subscribe(
      (count: number) => {
        this.totalPaginas = count
      },
      erro => {
        console.log('Erro ao contar paginas de corredor', erro.error.mensagem)
      }
    )
  }

}
