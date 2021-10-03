import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;

  urlImagem: string = 'http://lorempixel.com/400/200/nature';

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  };


  botaoClicado(){
    alert( 'Botão Clicado!!!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  };

  salvarValor(valor: any){
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  }

  salvarValorBlur(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

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
