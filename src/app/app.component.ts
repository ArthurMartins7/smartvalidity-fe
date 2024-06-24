import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smartvalidity-fe';


  isCadastroDropdownOpen = false;
  isListagemDropdownOpen = false;
  isFornecedoresDropdownOpen = false;

  [key: string]: any;

 toggleDropdown(dropdown: string) {
    this[dropdown] = !this[dropdown];
  }
}
