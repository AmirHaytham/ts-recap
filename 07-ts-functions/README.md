# 07. Functions, optional params, defaults

From the functions slide (page 022).

Typed parameters and return types, `void`, `last?: string`, `b = 0`, and the
slide's table of `?`, `?.` and `??`.

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

Point at the `score || 100` line. Zero is a real score and `||` throws it away.
`??` only kicks in for `null` and `undefined`. This is the "common pitfall" on
the slide, and it causes real bugs in forms.

`makeFullName('Amir')` prints cleanly because of `last ?? ''` plus `.trim()`.
Remove the `?? ''` and you get the text "undefined" in the output.

The last mistake is a function that only returns on one branch. TypeScript
catches the missing return that JavaScript would just turn into `undefined`.
