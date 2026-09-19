// declare the shape first...
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

// ...then assign an object that matches it
employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

console.log('separate:', employee);

// or both in one statement
let manager: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 38,
  jobTitle: 'Engineering Manager',
};

console.log('combined:', manager);

// object (lowercase) means "anything that is not a primitive"
let things: object[] = [{}, [], () => {}, new Date()];
console.log('all of these are object:', things.map((t) => t.constructor.name));
