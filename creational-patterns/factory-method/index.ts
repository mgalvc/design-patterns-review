import VehicleFactory from "./factory";
import { Types } from "./types";

const factory = new VehicleFactory();

const car = factory.create(Types.CAR, 'car-123');
const motorcycle = factory.create(Types.MOTORCYCLE, 'moto-123');

car.move();
motorcycle.move();