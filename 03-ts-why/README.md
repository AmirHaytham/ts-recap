# 03. Why TypeScript

From the "Why TS?" slide (page 016).

The slide's two examples: `add("5", 10)` quietly returning `"510"` in
JavaScript, and a `Student` interface catching a typo and a missing field.

`src/index.ts` is the version that compiles. `src/mistakes.ts` is the version
with every bad line from the slide left in, each one marked.

## Run it

```bash
npm install
```

```bash
npm start
```

Then the broken version, to see what the compiler says:

```bash
npm run mistakes
```

## Worth showing

Run `npm start` first and point at `510`. No crash, no warning, just a wrong
answer. Then run `npm run mistakes` and show the same call refused before the
program ever runs. That contrast is the entire pitch for TypeScript.

The `student.Name` error comes with a suggestion, "Did you mean 'name'?". Open
`mistakes.ts` in VS Code and the red squiggle is already there before you save.
That is the IDE support bullet on the slide, visible.
