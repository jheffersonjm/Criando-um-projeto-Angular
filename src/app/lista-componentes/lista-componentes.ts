import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-lista-componentes',
  imports: [CurrencyPipe],
  templateUrl: './lista-componentes.html',
  styleUrl: './lista-componentes.css'
})
export class ListaComponentes {
 produtos: any[] = []; 
 constructor(private produtosServices: Produtos){ 
  this.produtos = this.produtosServices.listar();
 }
}
