interface Loggable {
  log(): void;
}

class Base implements Loggable {
  constructor(public name: string) {}
  log() {
    console.log('Base:', this.name);
  }
}

class Child extends Base {
  shout() {
    console.log(this.name.toUpperCase());
  }
}

const c = new Child('menna');
c.log(); // inherited from Base, never written in Child
c.shout();

// overriding, and calling the parent version with super
class Loud extends Base {
  log() {
    super.log();
    console.log('...and Loud adds its own line on top');
  }
}
new Loud('hassan').log();

// anything that implements Loggable can go in this list
const things: Loggable[] = [new Base('a'), new Child('b'), new Loud('c'), { log: () => console.log('plain object: d') }];
console.log('\nlogging everything through the interface:');
things.forEach((t) => t.log());
