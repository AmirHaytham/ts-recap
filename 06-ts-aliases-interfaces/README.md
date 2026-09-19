# 06. Type aliases and interfaces

From the type aliases slide (page 021).

`src/types.ts` is the slide's code exactly: `ID`, `User` with an optional
email, and `Admin extends User`. `src/index.ts` uses them, then adds the case
where `type` wins, a union of two shapes.

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

`Admin` can go anywhere a `User` is expected. `describe(boss)` works without
any conversion, which is what "extendable" buys you.

The `Result` union at the bottom is the reason `type` exists alongside
`interface`. Checking `r.ok` narrows the type, so `r.data` only exists in the
branch where it is actually there. An interface cannot express this.

The `email?.toUpperCase()` mistake is the one they will hit most in real code.
Optional means possibly undefined, and TypeScript will not let you forget it.
