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

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  lastFourOfSsn() {
    return this.ssn.slice(-4); // private is fine from inside the class
  }
}

class Employee extends Person {
  constructor(ssn: string, firstName: string, lastName: string, birthDate: Date, public jobTitle: string) {
    super(ssn, firstName, lastName, birthDate);
  }

  badge() {
    return `${this.lastName.toUpperCase()}, ${this.jobTitle}`; // protected is fine from a subclass
  }
}

const p = new Employee('29801011234567', 'Amir', 'Haytham', new Date('1998-01-01'), 'TA');
console.log(p.getFullName());
console.log('ssn ends in', p.lastFourOfSsn());
console.log(p.badge());
console.log('born', p.birthDate.getFullYear());

// the two ways to write the same service
type Repo = { findAll(): string[] };

class UserServiceLong {
  private repo: Repo; // step 1: declare

  constructor(repo: Repo) {
    this.repo = repo; // step 2: assign
  }

  list() { return this.repo.findAll(); }
}

class UserService {
  constructor(private repo: Repo) {} // step 1 & 2, the style NestJS uses

  list() { return this.repo.findAll(); }
}

const repo: Repo = { findAll: () => ['Menna', 'Hassan'] };
console.log(new UserServiceLong(repo).list(), new UserService(repo).list());

// private is a compile time rule. At runtime the value is still sitting there.
console.log('what JavaScript actually sees:', JSON.stringify(p));
