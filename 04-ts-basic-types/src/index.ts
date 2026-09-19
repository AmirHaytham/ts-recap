// primitives
let username: string = 'Omar';
let age: number = 27;
let active: boolean = true;

// arrays
let tags: string[] = ['typescript', 'backend'];

// tuple
let pair: [number, string] = [1, 'one'];

// any (avoid unless necessary)
let whatever: any = 'hello';
whatever = 42;
whatever = { anything: 'goes' };

console.log({ username, age, active, tags, pair, whatever });

let x: number;
let a = 14;
let b;

console.log('typeof a =', typeof a, ' (inferred from 14, no annotation needed)');
console.log('b =', b);

// Hands-on 2 from the slide
function sum(a: number, b: number): number {
  return a + b;
}
console.log('sum(1, 2) =', sum(1, 2));

// types are erased at runtime, so this is all JavaScript sees
console.log('typeof tags =', typeof tags, ', typeof pair =', typeof pair);
