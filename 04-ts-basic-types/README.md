# 04. Basic types

From the basic types slide (page 019).

Primitives, arrays, a tuple, `any`, inference, and Hands-on 2 from the slide.

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

The last line of `npm start` prints `typeof tags` and `typeof pair` as plain
`object`. Types exist at compile time only, and this is the proof.

In `npm run mistakes`, the tuple line gives two errors, one per slot. Order
matters in a tuple, that is what makes it a tuple and not just an array.

The last line of `mistakes.ts` calls `whatever.this.does.not.exist()` and gets
no error at all. That is what "any disables type checks" means. Ask them what
happens at runtime.
