import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-calcular',
  imports: [ReactiveFormsModule],
  templateUrl: './calcular.html',
  styleUrl: './calcular.scss',
})
export class Calcular {
  homeService = inject(HomeService);

  constructor() {}

  applyForm = new FormGroup({
    num1: new FormControl(),
    num2: new FormControl(),
    num3: new FormControl(),
  });

  submitFormCalc() {
    this.homeService.submitFormCalc(
      parseInt(this.applyForm.value.num1),
      parseInt(this.applyForm.value.num2),
      parseInt(this.applyForm.value.num3)
    );
  }
}
