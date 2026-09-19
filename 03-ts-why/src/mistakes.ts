// Every line marked below fails on purpose. Run `npm run mistakes` to see why.

function add(a: number, b: number): number {
  return a + b;
}

add('5', 10); // error

interface Student {
  name: string;
  grade: number;
}

function printStudent(student: Student) {
  console.log(`${student.name} scored ${student.grade}`);
  console.log(`${student.Name} scored ${student.grade}`); // error
}

printStudent({ name: 'Sara', grade: 95 });
printStudent({ name: 'Ali' }); // error
