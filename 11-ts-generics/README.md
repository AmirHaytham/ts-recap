# 11. Generics

From the generics slide (page 026).

`identity<T>` and `DataStore<T>` from the slide, then the same store holding a
custom `Task` type, then a generic `ApiResponse<T>`, the shape most API code
ends up using.

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

`num.toFixed(2)` and `str.toUpperCase()` both work because TypeScript inferred
`T` from the argument. Nobody wrote `identity<number>`.

Compare `identity` with `identityAny`. Both accept anything, but only the
generic one remembers what went in. The last line of the mistakes file compiles
and would crash at runtime. That is `any` again.

`ApiResponse<Task[]>` is worth a minute. The response wrapper is written once
and works for every endpoint. That is what the slide means by reusable.
