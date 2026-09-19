class Engine {
  start() {
    console.log('Engine started 🧠');
  }
}

export class Car {
  engine = new Engine(); // ❌ creates its own dependency

  drive() {
    this.engine.start();
    console.log('Car is moving 🚗');
  }
}
