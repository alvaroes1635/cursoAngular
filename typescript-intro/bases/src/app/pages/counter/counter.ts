import {Component} from '@angular/core';


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
@Component({
  selector: 'Counter',
  templateUrl: './counter.html',
  styles: ` 
  button {
    padding: 5px;
    margin: 5px 10px;
    width: 100px;
  }
   `
})


export class Counter {
    count:number = 10;
    invcreaseby(incremento:number):void {
        this.count += incremento;
    }
    reset():void {
        this.count = 10;
    };
};