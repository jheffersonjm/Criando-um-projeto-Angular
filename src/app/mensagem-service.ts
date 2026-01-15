import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  obterMensagem(): String{ 
    return 'angular e Incrivel!!';
  }
}
