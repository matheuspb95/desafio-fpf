import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HomeService {
  api_url = 'http://0.0.0.0:8000/api/';

  constructor() {}

  submitFormCalc(num1: number, num2: number, num3: number) {
    console.log('num1', num1, 'num2', num2, 'num3', num3);
    fetch(this.api_url + 'processar', {
      method: 'POST',
      body: JSON.stringify({ num1: num1, num2: num2, num3: num3 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
