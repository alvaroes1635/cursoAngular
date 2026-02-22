function addNumbers(a: number, b: number): number {
  return a + b;
};

const addnumersArrow = (a: number, b: number): string => {
  return `${a+b}`;
};

//const result:number = addNumbers(5, 10);
//const result2:string = addnumersArrow(2, 10);
//console.log({result, result2});

interface character {
  name: string;
  hp: number;
  showHp: () => void;
};

function heal(character: character, amount: number): void {
  character.hp += amount;
}

const strider: character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  }
};

heal(strider, 20);
strider.showHp();   

export {};