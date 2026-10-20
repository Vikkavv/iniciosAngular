import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent{
    public sports: Array<string>;
    public numbers: Array<number>;


    constructor(){
        this.sports = ["Fútbol", "Ténis", "Pádel", "Baloncesto"];
        this.numbers = [2, 5, 4, 6, 3, 7];
    }
}