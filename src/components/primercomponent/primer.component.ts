import { Component } from "@angular/core";

@Component({
    selector: "primer-component",
    standalone: false,
    templateUrl: './primer.component.html',
    styleUrl: './primer.component.css',
})

export class PrimerComponent {
    public nombre: String;
    public year: number;
    
    constructor(){
        this.nombre = "Alumno";
        this.year = 2026;
    }
}