class Vehicle1{
    // color: string;
    public color: string = 'red';
    constructor(color : string){
        this.color = color;
    }
    protected drive(): void{
        console.log('Hello from drive method from Vehicle1 Class!');
    };

    public honk(): void{
        console.log('Hello from honk method from Vehicle1 Class!');
    };

    private refill(): void{
        console.log('Hello from refill method from Vehicle1 Class');
    }
}

class Car extends Vehicle1{
    public wheels: number = 4;
    constructor(wheels: number, color: string){
        super(color);
        this.wheels = wheels;
    }
    drive(): void{
        console.log('Hello from Drive method from Car class');
    }
}

const vehicle = new Vehicle1('black');
const car = new Car(6,'blue');
vehicle.honk();
car.drive();
car.honk();