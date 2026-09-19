import { ID, User, Admin } from './types';

const ids: ID[] = [1, 'u-2', 3];
console.log('ids:', ids);

const menna: User = { id: 1, name: 'Menna' };
const hassan: User = { id: 'u-2', name: 'Hassan', email: 'hassan@giu-uni.de' };

const boss: Admin = {
  id: 99,
  name: 'Nada',
  email: 'nada.hamed@giu-uni.de',
  role: 'superadmin',
};

function describe(user: User) {
  return `${user.name} (${user.email ?? 'no email'})`;
}

console.log(describe(menna));
console.log(describe(hassan));
console.log(describe(boss), 'is also a User, because Admin extends User');

// where type beats interface: unions of shapes
type Result = { ok: true; data: User } | { ok: false; error: string };

function findUser(id: ID): Result {
  if (id === 1) return { ok: true, data: menna };
  return { ok: false, error: `no user with id ${id}` };
}

for (const r of [findUser(1), findUser(7)]) {
  // checking r.ok narrows the type, so r.data only exists in the first branch
  if (r.ok) console.log('found', r.data.name);
  else console.log('failed:', r.error);
}
