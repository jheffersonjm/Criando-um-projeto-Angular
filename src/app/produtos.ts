import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Produtos {
  listar() { 
    return [ 
      {nome: 'Pc Gamer', preco: 90000}, 
      {nome: 'Notebook', preco: 4500},
      {nome: 'Tablet', preco: 2500}
    ];
  }
}
