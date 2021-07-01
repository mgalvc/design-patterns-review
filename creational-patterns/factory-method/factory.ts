import { Types } from "./types";

export default class VehicleFactory {
  private vehicleTypes = {
    [Types.CAR]: Car,
    [Types.MOTORCYCLE]: Motorcycle
  }

  create(type: Types, plate: string): Vehicle {
    const vehicle = this.vehicleTypes[type];

    if(!vehicle) {
      throw Error('Invalid vehicle type');
    }

    return new vehicle(plate);
  }
}

abstract class Vehicle {
  plate: string;

  constructor(plate: string) {
    this.plate = plate;
  } 

  move(): void {}
}

class Car extends Vehicle {
  move() {
    console.log(`Car of plate ${this.plate} is moving on the road`);
  }
}

class Motorcycle extends Vehicle {
  move() {
    console.log(`Motorcycle of plate ${this.plate} is moving between the cars on the road`);
  }
}