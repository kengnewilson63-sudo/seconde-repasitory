import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { PlaylistComponent } from "./playlist/playlist";
import { Service } from "./service/service";
import { Output } from "./output/output";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, PlaylistComponent, Service, Output],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
Personne: { id: number, nom: string, prenom: string, age: number }[] = [
    { id: 1, nom: 'John', prenom: 'Doe', age: 30 },
    { id: 2, nom: 'Jane', prenom: 'Smith', age: 25 },
    { id: 3, nom: 'Bob', prenom: 'Johnson', age: 40 },
    { id: 4, nom: 'rema', prenom: 'william', age: 44 },
      { id: 5, nom: 'sara', prenom: 'will', age: 35 }
  ]
name:string='bonjour'

}
