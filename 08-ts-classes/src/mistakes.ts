class Person {
  private ssn: string;
  public firstName: string;
  protected lastName: string;
  readonly birthDate: Date;

  constructor(ssn: string, firstName: string, lastName: string, birthDate: Date) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}

const p = new Person('123', 'Amir', 'Haytham', new Date());

console.log(p.firstName); // fine, public
console.log(p.ssn); // error, private
console.log(p.lastName); // error, protected, only the class and its subclasses
p.birthDate = new Date(); // error, readonly after construction

class Broken {
  readonly id: number; // error, never initialized
}
