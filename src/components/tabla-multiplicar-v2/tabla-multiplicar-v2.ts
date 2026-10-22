import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-v2',
  standalone: false,
  styleUrl: './tabla-multiplicar-v2.css',
  templateUrl: './tabla-multiplicar-v2.html',
})

export class TablaMultiplicarV2 {

  public numeros!: Array<number>;

  @ViewChild("num") numero: ElementRef;  

  constructor() {
    this.numero = new ElementRef(0);
  }

  multiplicarNumero(){
    this.numeros = [];
    let numero = Number.isNaN(parseInt(this.numero.nativeElement.value)) ? 0 : parseInt(this.numero.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      this.numeros.push(numero * i);
    }
  }

}
