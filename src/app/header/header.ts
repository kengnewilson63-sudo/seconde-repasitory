import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Bouton } from "../bouton/bouton";
import { Output } from "../output/output";

@Component({
  selector: 'app-header',
  imports: [RouterLink, Bouton, Output],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
merciVisible=false;
totallike=0;
  affichemerci(){
   
    this.merciVisible=true;
  }
  metttreajour(nombre:number){
    this.totallike=nombre;
  }
}
