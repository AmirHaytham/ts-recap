function identity<T>(value: T): T {
  return value;
}

let num = identity(5);
num.toUpperCase(); // error, T was inferred as number

class DataStore<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
}

const numStore = new DataStore<number>();
numStore.addItem('10'); // error, this store only takes numbers

function identityAny(value: any): any {
  return value;
}
identityAny(5).toUpperCase(); // no error here, it crashes at runtime instead
