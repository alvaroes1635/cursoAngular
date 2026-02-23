import { Component, ChangeDetectionStrategy, signal, Signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

// con el changedetector para detectar cambios en el componente
@Component({
  selector: 'Hero',
  templateUrl: './hero.html',
  imports: [UpperCasePipe],
})
export class Hero {
  name = signal('Spiderman');
  age = signal(35);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()} `;
  }

  changeHero(): void {
    this.name.update((current) => 'Spiderman');
    this.age.set(22);
  }
  resetForm(): void {
    this.name.set('IronMan');
    this.age.set(45);
  }
  changeAge(): void {
    this.age.update((current) => 60);
  }
}
