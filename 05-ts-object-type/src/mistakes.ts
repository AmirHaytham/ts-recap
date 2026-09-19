let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
}; // error, jobTitle is missing

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: '25', // error, wrong type
  jobTitle: 'Web Developer',
};

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
  salary: 9000, // error, not part of the shape
};

let o: object = 'hello'; // error, a string is a primitive
let O: Object = 'hello'; // fine, which is exactly why the slide says read up on Object vs object
