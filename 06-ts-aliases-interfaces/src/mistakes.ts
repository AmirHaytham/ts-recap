type ID = number | string;

interface User {
  id: ID;
  name: string;
  email?: string;
}

interface Admin extends User {
  role: 'admin' | 'superadmin';
}

const a: ID = true; // error, ID is number or string only

const u: User = { id: 1 }; // error, name is required

const boss: Admin = { id: 1, name: 'Nada', role: 'owner' }; // error, not one of the allowed roles

function shout(user: User) {
  return user.email.toUpperCase(); // error, email might be undefined
}
