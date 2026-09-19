function add(a: number, b: number): number {
  return a + b;
}

// void is used in case no return
function logSum(a: number, b: number): void {
  console.log(`${a} + ${b} = ${add(a, b)}`);
}
logSum(2, 3);

// optional parameter
function makeFullName(first: string, last?: string): string {
  return `${first} ${last ?? ''}`.trim();
}
console.log(makeFullName('Amir', 'Haytham'));
console.log(makeFullName('Amir'));

// default value
const addDefault = (a: number, b: number = 0): number => a + b;
console.log('addDefault(5) =', addDefault(5));

// ?  ?.  ??
interface Profile {
  name: string;
  age?: number;
  address?: { city: string };
}

const people: Profile[] = [
  { name: 'Sara', age: 22, address: { city: 'Cairo' } },
  { name: 'Ali' },
];

for (const p of people) {
  console.log(p.name, '| city:', p.address?.city ?? 'unknown', '| age:', p.age ?? 'not given');
}

// ?? vs || : only null and undefined trigger ??
const score = 0;
console.log('score || 100 =', score || 100, ' <-- wrong, 0 is a real score');
console.log('score ?? 100 =', score ?? 100, ' <-- right');

// the four function types from the slide
function named(x: number): number { return x * 2; }
const anonymous = function (x: number): number { return x * 2; };
const arrow = (x: number): number => x * 2;
const doubled: number[] = [1, 2, 3].map(arrow);

console.log(named(4), anonymous(4), arrow(4), doubled);
