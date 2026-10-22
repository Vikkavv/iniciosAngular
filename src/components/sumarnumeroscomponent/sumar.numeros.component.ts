import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "sumar-numeros-component",
    standalone: false,
    templateUrl: "./sumar.numeros.component.html"
})

export class SumarNumerosComponent{

    public suma: number;

    @ViewChild("num1") num1Input!: ElementRef;
    @ViewChild("num2") num2Input!: ElementRef;

    constructor() {
        this.suma = 0;
    }

    sumarNumeros() {
        this.suma = parseInt(this.num1Input.nativeElement.value) + parseInt(this.num2Input.nativeElement.value);
    }
}