import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core';

// con el html dentro del componente
/*
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h1>Counter: {{count}}</h1>  
      <button (click)="invcreaseby(1);">Sumar 1</button>
    </div>
  `
})
*/

// con el html en un archivo externo y el estilo dentro del componente
/*
@Component({
  selector: 'Counter',
  templateUrl: './counter.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 100px;
    }
  `,
})
  */

// con el changedetector para detectar cambios en el componente
@Component({
  selector: 'Counter',
  templateUrl: './counter.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 100px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Counter {
  count: number = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.count += 1;
      this.counterSignal.update((current) => current + 1);
      console.log('Tick');
    }, 1000);
  }
  invcreaseby(incremento: number): void {
    this.count += incremento;
    this.counterSignal.update((current) => current + incremento);
  }
  reset(): void {
    this.count = 0;
    this.counterSignal.set(0);
  }
}

