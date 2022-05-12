const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

// Long Annotations
const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) : void=>{
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Fixing long Annotations

interface Vehicle{
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic1 = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const printVehicle1 = (vehicle: Vehicle) : void =>{
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

printVehicle1(oldCivic1);