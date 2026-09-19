# 10. Dependency injection

From the DI slide (page 025).

`src/without-di.ts` and `src/with-di.ts` are the slide's two halves, kept in
separate files so you can show them side by side. `src/index.ts` runs both, then
swaps in a fake engine the way a test would.

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

Without DI, getting an electric car means editing `Car`. With DI, it means
passing a different engine. Nothing inside `Car` changed.

The `FakeEngine` at the bottom is why people actually bother. The test checks
that the car started its engine without ever starting a real one. Say that this
exact pattern is how NestJS wires its services together, so they will see it
again.

The slide's line fits in a sentence worth repeating: your class does not build
what it needs, it gets it handed to it.
