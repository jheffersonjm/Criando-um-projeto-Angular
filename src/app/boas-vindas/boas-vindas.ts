import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensagemService } from '../mensagem-service';


@Component({
  selector: 'app-boas-vindas',
  imports: [FormsModule],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.css'
})
export class BoasVindas {
nome: String = "jhefferson"; 

constructor(private mensagemService: MensagemService){ {
  this.nome = this.mensagemService.obterMensagem();
}
}
}
