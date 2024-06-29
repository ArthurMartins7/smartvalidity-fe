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
    throw new Error('Method not implemented.');
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

public inserir(): void {
    this.fornecedorService.salvar(this.fornecedor).subscribe(
      (resposta) => {
        this.fornecedor = resposta;
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
    this.router.navigate(['/fornecedor/fornecedor-listagem'])
  }
}
