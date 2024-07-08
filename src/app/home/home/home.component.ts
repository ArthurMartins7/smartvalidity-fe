import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Colaborador } from '../../shared/model/colaborador';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public colaboradorAutenticado: Colaborador = new Colaborador();

  isCadastroDropdownOpen = false;
  isListagemDropdownOpen = false;
  isFornecedoresDropdownOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {

    let usuarioNoStorage = localStorage.getItem('usuarioAutenticado');

    if(usuarioNoStorage){
      this.colaboradorAutenticado = JSON.parse(usuarioNoStorage);
    } else {
      this.router.navigate(['/login'])
    }
  }

  [key: string]: any;

 toggleDropdown(dropdown: string) {
  this.isCadastroDropdownOpen = false;
  this.isListagemDropdownOpen = false;
  this.isFornecedoresDropdownOpen = false;
    this[dropdown] = !this[dropdown];
  }

  logout(){
    localStorage.removeItem('usuarioAutenticado');
    this.router.navigate(['/login'])
  }

}
