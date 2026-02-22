//opción 1
/*
export class Person {
public name: string;
public address: string;
constructor(name: string, address: string) {
    this.name = name;
    this.address = address;     
} 

};
*/

//opción 2 resumida esto solo funciona si el atriuto de "erasableSyntaxOnly": false, en el tsconfig.json
export class Person {

constructor(public name: string, private address: string = 'NO Address') {
} ;

};


export class Hero extends Person {
constructor(name: string, address: string, public alterEgo: string, public age:number, public realName: string) {
    super(name, address);
}
};  


//const ironMan = new Person('Tony Stark', 'Malibu, California');
const ironMan = new Hero('Tony Stark', 'Malibu, California', '  Iron Man', 45, 'Anthony Edward Stark');
const hulk = new Person('Hulk');
console.log(ironMan);
console.log(hulk);
