# 09. Inheritance and interfaces with classes

From the inheritance slide (page 024).

`Loggable`, `Base implements Loggable` and `Child extends Base` from the slide,
plus an override that calls `super`, plus a list of different things all
logging through the same interface.

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

`c.log()` runs even though `Child` never defines `log`. It came from the
parent. That is inheritance in one line.

The last item in the `things` list is a plain object, not a class at all, and
it still fits `Loggable`. TypeScript checks the shape, not the family tree.

The `super` error in the mistakes file is one they will definitely meet. A
subclass constructor has to call `super(...)` before anything else.
