// type alias
export type ID = number | string;

// interface (used often with classes)
export interface User {
  id: ID;
  name: string;
  email?: string; // optional
}

// extend interface
export interface Admin extends User {
  role: 'admin' | 'superadmin';
}
