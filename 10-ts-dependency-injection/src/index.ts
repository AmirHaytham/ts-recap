import { Car as CarWithoutDI } from './without-di';
import { Car, Engine, ElectricEngine } from './with-di';

console.log('--- without DI ---');
const oldCar = new CarWithoutDI();
oldCar.drive();
console.log('want an electric one? you have to edit the Car class itself.\n');

console.log('--- with DI ---');
const engine = new Engine(); // create dependency
const car = new Car(engine); // inject it
car.drive();

const electricEngine = new ElectricEngine();
const electricCar = new Car(electricEngine);
electricCar.drive();

// the reason people actually care: testing
console.log('\n--- in a test ---');
class FakeEngine extends Engine {
  started = false;
  start() {
    this.started = true;
  }
}

const fake = new FakeEngine();
new Car(fake).drive();
console.log('did the car start its engine?', fake.started);
