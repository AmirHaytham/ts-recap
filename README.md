# TypeScript recap, runnable

Examples for Tutorial 2: Swagger and an intro to TypeScript. One folder per slide,
each one runnable on its own so you can show the code working instead of reading
it off a slide.

Each folder has its own README with the run command, the slide it comes from, and
a few things worth showing while it is on screen.

## What you need

Node 18 or newer. Nothing else. No database anywhere in this repo.

## The folders

| # | Folder | Slide | Run |
|---|---|---|---|
| 01 | `01-swagger-express` | Swagger, OpenAPI structure, setup (009 to 014) | `npm start`, then open `/api-docs` |
| 02 | `02-ts-setup` | TS setup (017, 018) | follow the steps in its README |
| 03 | `03-ts-why` | Why TS? (016) | `npm start` |
| 04 | `04-ts-basic-types` | Basic types (019) | `npm start` |
| 05 | `05-ts-object-type` | The object type (020) | `npm start` |
| 06 | `06-ts-aliases-interfaces` | Type aliases and interfaces (021) | `npm start` |
| 07 | `07-ts-functions` | Functions, optional params, defaults (022) | `npm start` |
| 08 | `08-ts-classes` | Classes, access modifiers, readonly (023) | `npm start` |
| 09 | `09-ts-inheritance` | Inheritance and interfaces (024) | `npm start` |
| 10 | `10-ts-dependency-injection` | Dependency injection (025) | `npm start` |
| 11 | `11-ts-generics` | Generics (026) | `npm start` |

Run `npm install` once inside any folder before the first `npm start`.

## How the TypeScript folders work

Folders 03 to 11 all follow the same pattern, so once students have seen one they
know how to read the rest.

```
src/index.ts      the code from the slide, compiles clean, this is what npm start runs
src/mistakes.ts   the same ideas done wrong on purpose, every bad line marked
```

Three commands, the same in every folder:

```bash
npm start
```

```bash
npm run check
```

```bash
npm run mistakes
```

`start` runs the code with tsx. `check` runs the real compiler over it and
should print nothing. `mistakes` runs the compiler over the broken file so the
errors land on screen. Every error it prints lines up with a line marked
`// error` in the file, which makes a nice exercise: have students predict the
error before you run it.

## Swagger

The only server in the repo. Start it from its folder:

```bash
npm start
```

```
http://localhost:3000/api-docs
```

Stop it with `Ctrl + C`.

## Suggested order for a live session

1. **01** Swagger, since it builds on the Express they already know.
2. **02** setup, typed live so they see `tsc` and `tsx` for themselves.
3. **03** the pitch: `add("5", 10)` returning `"510"`.
4. **04 to 07** the language: types, objects, aliases, functions.
5. **08 to 11** the parts NestJS leans on: classes, inheritance, DI, generics.

Short on time? The spine is **01, 03, 08, 10**.

## Notes

Every example here was run before it was committed. Each `npm run check` passes,
and each `npm run mistakes` fails exactly where its comments say it will.

In folder 01, `POST /login` is hardcoded to `student@giu-uni.de` and `sp1` so
there is something to try in Swagger. It is not real auth.
