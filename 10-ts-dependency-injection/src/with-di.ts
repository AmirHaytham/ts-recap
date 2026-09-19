export class Engine {
  start() {
    console.log('Engine started 🧠');
  }
}

export class ElectricEngine extends Engine {
  start() {
    console.log('Electric engine started silently ⚡');
  }
}

export class Car {
  constructor(private readonly engine: Engine) {} // ✅ DI + parameter property

  drive() {
    this.engine.start();
    console.log('Car is moving 🚗');
  }
}
