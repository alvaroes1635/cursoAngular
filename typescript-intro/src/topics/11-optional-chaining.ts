export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
    };

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel']
    };

function countPassengers(passenger: Passenger): number {
    return passenger.children?.length ?? 0;
}

console.log(countPassengers(passenger1));
console.log(countPassengers(passenger2));       