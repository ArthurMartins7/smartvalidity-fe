import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../shared/model/fornecedor';
import { FornecedorService } from '../../shared/service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fornecedor-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './fornecedor-detalhe.component.html',
  styleUrl: './fornecedor-detalhe.component.scss'
})
export class FornecedorDetalheComponent implements OnInit{

  public fornecedor: Fornecedor = new Fornecedor();
  public idFornecedor: number;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idFornecedor = +params['id'];
      if (this.idFornecedor) {
        this.carregarFornecedor();
      }
    });
  }

  carregarFornecedor(): void {
    this.fornecedorService.consultarPorId(this.idFornecedor).subscribe(
      (resposta) => {
        this.fornecedor = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao carregar fornecedor!', erro, 'error');
      }
    );
  }

  salvar(): void {
    if (this.fornecedor.nome && this.fornecedor.telefone && this.fornecedor.cnpj) {
      if (this.idFornecedor) {
        this.alterar();
      } else {
        this.inserir();
      }
    } else {
      Swal.fire('Preencha todos os campos obrigatórios!', '', 'warning');
    }
  }


  inserir(): void {
    this.fornecedorService.salvar(this.fornecedor).subscribe(
      (resposta) => {
        Swal.fire('Fornecedor salvo com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar um fornecedor!', erro, 'error');
      }
    );
  }

  alterar() {
    this.fornecedorService.atualizar(this.fornecedor).subscribe(
      resultado => {
        Swal.fire({
          title: "Fornecedor editado com sucesso!",
          text: "",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#ff914d"
        })
        this.voltar();
      },
      erro => {
        Swal.fire({
          title: "Erro ao editar fornecedor",
          html: erro.error.mensagem,
          icon: "error",
          showConfirmButton: true,
          confirmButtonColor: "#ff914d"
        })
      }
    )
  }

  voltar(): void {
    this.router.navigate(['home/fornecedor/fornecedor-listagem'])
  }
}
