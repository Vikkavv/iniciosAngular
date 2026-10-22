import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "forms-binding-component",
    standalone: false,
    templateUrl: "./forms.binding.component.html"
})

export class FormsBindingComponent{
    public user: any;
    public message: string;

    recibirDatos(): void {
        this.message = "Datos recibidos";
    }

    constructor(){
        this.message = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }
}