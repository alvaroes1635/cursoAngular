// para usar decoradores debe poner experimentalDecorators": true, en el tsconfig.json

function classDecorator <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
};

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello';
    print() {
        console.log(this.myProperty);
    }
} ;

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

