interface Loggable {
  log(): void;
}

class Silent implements Loggable {} // error, promised log() and never wrote it

class Base {
  constructor(public name: string) {}
}

class Child extends Base {
  constructor(public age: number) {} // error, must call super(...) first
}

const b: Base = new Base('x');
b.shout(); // error, Base has no shout()
