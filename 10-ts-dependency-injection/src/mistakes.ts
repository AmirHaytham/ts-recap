class Engine {
  start() {}
}

class Car {
  constructor(private readonly engine: Engine) {}
  drive() {
    this.engine.start();
  }
}

new Car(); // error, a Car cannot exist without being given an engine

new Car({ fly() {} }); // error, that is not something that can start()

class Garage {
  constructor(private readonly car: Car) {}
  swap(newCar: Car) {
    this.car = newCar; // error, readonly
  }
}
