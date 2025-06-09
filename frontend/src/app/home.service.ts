import { Injectable } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomeService {
  api_url = 'http://0.0.0.0:8000/api/';

  calc_task: Record<string, any> = {};
  task_list: any[] = [];
  DATA_SUBSCRIPTION: Subscription[] = [];

  constructor() {}

  submitFormCalc(num1: number, num2: number, num3: number) {
    let numbers = { num1: num1, num2: num2, num3: num3 };
    fetch(this.api_url + 'processar', {
      method: 'POST',
      body: JSON.stringify(numbers),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response: Response) =>
      response.json().then((response) => {
        this.calc_task[response['id']] = { ...response, ...numbers };
        this.task_list = Object.values(this.calc_task);
        this.checkStatus(response['id']).subscribe();
      })
    );
  }

  checkStatus(id: number): Observable<any> {
    return interval(500).pipe(
      switchMap((count) =>
        fetch(this.api_url + 'status/' + id, {
          method: 'GET',
        })
          .then((response: Response) =>
            response.json().then((response) => {
              let task = this.calc_task[response['id']];
              if (response['status'] === 'Processando') {
                response['status'] =
                  'Processando' + '.'.repeat(1 + (count % 3));
              }
              this.calc_task[response['id']] = { ...task, ...response };
              this.task_list = Object.values(this.calc_task);
              return response;
            })
          )
          .catch((err) => console.log(err))
      ),
      takeWhile((value) => {
        return value['status'] !== 'Concluído';
      }, true)
    );
  }
}
