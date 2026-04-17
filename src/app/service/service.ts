import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

    name=input<string>();
  prenom=input<string>();
  age=input<number>();
}
