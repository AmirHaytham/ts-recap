let username: string = 'Omar';
username = 27; // error

let tags: string[] = ['typescript', 'backend'];
tags.push(3); // error

let pair: [number, string] = [1, 'one'];
pair = ['one', 1]; // error, order matters in a tuple

function sum(a: number, b: number): number {
  return a + b;
}
sum(1, '2'); // error, Hands-on 2

let x: number;
console.log(x); // error, used before being assigned

let whatever: any = 'hello';
whatever.this.does.not.exist(); // no error at all, that is the danger of any
