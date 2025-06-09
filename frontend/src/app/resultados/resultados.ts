import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resultados',
  imports: [NgFor],
  templateUrl: './resultados.html',
  styleUrl: './resultados.scss',
})
export class Resultados {
  homeService = inject(HomeService);
}
