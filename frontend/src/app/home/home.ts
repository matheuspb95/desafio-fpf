import { Component } from '@angular/core';
import { Calcular } from '../calcular/calcular';
import { Resultados } from '../resultados/resultados';

@Component({
  selector: 'app-home',
  imports: [Calcular, Resultados],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
