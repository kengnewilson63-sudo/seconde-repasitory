import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  Personne: { id: number, nom: string, prenom: string, age: number }[] = [
    { id: 1, nom: 'John', prenom: 'Doe', age: 30 },
    { id: 2, nom: 'Jane', prenom: 'Smith', age: 25 },
    { id: 3, nom: 'Bob', prenom: 'Johnson', age: 40 },
    { id: 4, nom: 'rema', prenom: 'william', age: 44 },
      { id: 5, nom: 'sara', prenom: 'will', age: 35 }
  ]
}
