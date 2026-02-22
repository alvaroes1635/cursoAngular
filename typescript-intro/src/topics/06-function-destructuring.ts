export interface Product {
    description:string;
    price: number;
};

const phone: Product = {
    description: 'Nokia A1',
    price: 1500
};

const tablet: Product = {
    description: 'iPad Air',
    price: 2500
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
};  

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;

    let total = 0;
    // destructra price de productos
    products.forEach(({price})=> {
       total += price;
    });
    return [total, total * tax ];
};

const shopingCart= [phone, tablet];
const tax = 0.15;

//destructura varubles del resultado de la función taxCalculation
const [total, taxAmount] = taxCalculation({ products: shopingCart, tax });

console.log('Total:', total);
console.log('Tax:', taxAmount);