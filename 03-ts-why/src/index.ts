function add(a: number, b: number): number {
  return a + b;
}

console.log('add(5, 10) =', add(5, 10));

interface Student {
  name: string;
  grade: number;
}

function printStudent(student: Student) {
  console.log(`${student.name} scored ${student.grade}`);
}

printStudent({ name: 'Sara', grade: 95 });

// the JavaScript version of add, with nothing stopping a string from getting in
function addJs(a: any, b: any) {
  return a + b;
}

console.log('addJs("5", 10) =', addJs('5', 10), '  <-- string concatenation, not math');
