// Runs every example in order and prints its output.
//   node run-all.js                 everything
//   node run-all.js --no-mistakes   skip the compiler errors
//   node run-all.js 07 10           only those folders

const { spawnSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const showMistakes = !args.includes('--no-mistakes');
const only = args.filter((a) => /^\d+$/.test(a)).map((a) => a.padStart(2, '0'));

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

const folders = fs
  .readdirSync(__dirname)
  .filter((d) => /^\d\d-/.test(d) && fs.statSync(path.join(__dirname, d)).isDirectory())
  .filter((d) => only.length === 0 || only.includes(d.slice(0, 2)))
  .sort();

function header(title) {
  console.log('\n' + cyan('='.repeat(70)));
  console.log(bold(cyan('  ' + title)));
  console.log(cyan('='.repeat(70)));
}

function sub(title) {
  console.log('\n' + bold(title));
}

function run(cmd, cwd) {
  const r = spawnSync(cmd, { cwd, shell: true, encoding: 'utf8' });
  return (r.stdout || '') + (r.stderr || '');
}

function ensureInstalled(dir) {
  if (fs.existsSync(path.join(dir, 'node_modules'))) return;
  console.log(dim('  installing dependencies, first run only...'));
  run('npm install --silent --no-audit --no-fund', dir);
}

async function swagger(dir) {
  const server = spawn('node', ['index.js'], { cwd: dir });
  let started = false;
  server.stdout.on('data', (d) => {
    if (d.toString().includes('API running')) started = true;
  });

  for (let i = 0; i < 50 && !started; i++) await new Promise((r) => setTimeout(r, 100));
  if (!started) {
    server.kill();
    console.log(red('  could not start the server. Is port 3000 already taken?'));
    return;
  }

  const base = 'http://localhost:3000';
  const call = async (label, url, options) => {
    const res = await fetch(base + url, options);
    const body = res.status === 204 ? '' : await res.text();
    console.log(`  ${label.padEnd(34)} ${res.status}  ${body}`);
  };
  const post = (body) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  try {
    console.log(`  docs are served at ${base}/api-docs\n`);
    await call('GET  /tasks', '/tasks');
    await call('GET  /tasks?completed=true', '/tasks?completed=true');
    await call('GET  /tasks/99', '/tasks/99');
    await call('POST /tasks', '/tasks', post({ title: 'Study generics' }));
    await call('POST /login (right password)', '/login', post({ email: 'student@giu-uni.de', password: 'sp1' }));
    await call('POST /login (wrong password)', '/login', post({ email: 'student@giu-uni.de', password: 'nope' }));
    await call('POST /login (no email)', '/login', post({ password: 'sp1' }));
    await call('DELETE /tasks/1', '/tasks/1', { method: 'DELETE' });
  } finally {
    server.kill();
  }
}

(async () => {
  for (const name of folders) {
    const dir = path.join(__dirname, name);
    header(name);
    ensureInstalled(dir);

    if (name.startsWith('01-')) {
      await swagger(dir);
      continue;
    }

    if (name.startsWith('02-')) {
      console.log(run('npx tsx index.ts', dir).trimEnd());
      continue;
    }

    sub('npm start');
    console.log(run('npx tsx src/index.ts', dir).trimEnd());

    if (showMistakes && fs.existsSync(path.join(dir, 'src', 'mistakes.ts'))) {
      sub('npm run mistakes');
      const out = run('npx tsc --noEmit --strict --target es2022 --module commonjs src/mistakes.ts', dir);
      const errors = out.split('\n').filter((l) => l.includes('error TS'));
      errors.forEach((l) => console.log(red('  ' + l.replace('src/mistakes.ts', 'line').trim())));
    }
  }
  console.log('\n' + bold(`Done. Ran ${folders.length} folder${folders.length === 1 ? '' : 's'}.`) + '\n');
})();
