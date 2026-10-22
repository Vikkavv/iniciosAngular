import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})

export class TablaMultiplicar {
  public numeros!: Array<number>;
  public numero!: number;

  multiplicarNumeros(){
    this.numeros = [];
    this.numero = Number.isNaN(this.numero * 1) ? 0 : this.numero; 
    for (let i: number = 1; i <= 10; i++) {
      this.numeros.push(this.numero * i);
    }
  }
}
