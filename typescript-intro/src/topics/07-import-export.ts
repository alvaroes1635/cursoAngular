import  { type Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    { description: 'Apple', price: 1 },
    { description: 'Banana', price: 0.5 },
    { description: 'Orange', price: 0.75 }
];

// tax 0,15% 

const [total,tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

//console.log('Total:', total);
//console.log('Tax:', tax);