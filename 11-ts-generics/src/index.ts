function identity<T>(value: T): T {
  return value;
}

let num = identity(5); // T is number
let str = identity('Hello'); // T is string
console.log(num.toFixed(2), str.toUpperCase());

class DataStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringStore = new DataStore<string>();
stringStore.addItem('Apple');
stringStore.addItem('Banana');

const numStore = new DataStore<number>();
numStore.addItem(10);
numStore.addItem(20);

console.log(stringStore.getAll(), numStore.getAll());

// same class, a custom type this time
interface Task {
  id: number;
  title: string;
}
const taskStore = new DataStore<Task>();
taskStore.addItem({ id: 1, title: 'Read the generics slide' });
console.log(taskStore.getAll()[0].title);

// compare with any: it compiles, but the type information is gone
function identityAny(value: any): any {
  return value;
}
const lost = identityAny('Hello'); // lost is any, so nothing checks what you do with it
console.log(typeof lost);

// generic interface, the shape of most API responses you will write
interface ApiResponse<T> {
  ok: boolean;
  data: T;
}
const res: ApiResponse<Task[]> = { ok: true, data: taskStore.getAll() };
console.log(res);
