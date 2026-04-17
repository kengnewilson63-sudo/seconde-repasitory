import { Component, output } from '@angular/core';
import { Bouton } from "../bouton/bouton";

@Component({
  selector: 'app-output',
  imports: [Bouton],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {
  compteur=0;
  alike=output<void>();
  alike2=output<number>();
name: any;
  onClick(){
    this.compteur++;
    this.alike.emit();
    this.alike2.emit(this.compteur);
  }
}
