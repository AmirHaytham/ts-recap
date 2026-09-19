# 02. TypeScript setup

From the TS setup slides (pages 017 and 018).

The slide's eight steps, as a folder you can walk through live. Only `index.ts`
and `package.json` are committed. Everything else gets generated in front of the
class, which is the point.

## Before class

The slide installs things globally:

```bash
npm install -g typescript
```

```bash
npm install -g tsx
```

```bash
tsc -v
```

If you would rather not touch global installs on a lab machine, run
`npm install` in this folder and put `npx` in front of every `tsc` and `tsx`
below. Same result.

## The steps, in order

Step 2 is already done, `package.json` exists. Step 3, generate the compiler
config:

```bash
tsc --init
```

Open the new `tsconfig.json` and point at `target`, `outDir` and `strict`. You
do not need to change anything yet.

Step 4 is `index.ts`, already here. Step 5, compile it:

```bash
tsc index.ts
```

An `index.js` appears next to it. Open both side by side. The type annotation is
gone, and there is a bonus: the arrow function became `var greet = function` and
the template literal became `.concat(...)`. Passing a file name to `tsc` ignores
`tsconfig.json` and falls back to old ES5 output. Worth pointing at, since it
confuses people later.

Step 6, run the JavaScript:

```bash
node index.js
```

Step 7, skip the compile entirely:

```bash
tsx index.ts
```

Step 8, recompile on every save:

```bash
tsc --watch index.ts
```

Stop it with `Ctrl + C`.

## Worth showing

Change `greet("Amir")` to `greet(42)` and run `tsc index.ts` again. It errors
and still writes `index.js`. Then run `tsx index.ts` and it prints happily,
because tsx strips types without checking them. That surprises people, and it is
why `tsc` still matters even when you run everything with tsx.

When you are done, delete `index.js` and `tsconfig.json` so the folder is ready
for the next group.
