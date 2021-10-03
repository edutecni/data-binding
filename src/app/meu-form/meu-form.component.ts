import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  };
  // Agora é obrigatório criar uma função para obeter o valor do Elemento HTML
  getNome(evento: Event): string
  {
    if(evento)
      return (evento.target as HTMLInputElement).value;
    else
      return 'abc';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
