function add(a: number, b: number): number {
  return a + b;
}

add(1); // error, b is required

function makeFullName(first: string, last?: string): string {
  return first + ' ' + last.toUpperCase(); // error, last may be undefined
}

function logSum(a: number, b: number): void {
  return a + b; // error, void means nothing comes back
}

function getAge(): number {
  // error, not every path returns a number
  if (Math.random() > 0.5) return 20;
}
