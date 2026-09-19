# 05. The object type

From the object type slide (page 020).

The `employee` example both ways from the slide: declare the shape then assign,
or do both in one statement.

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

The mistakes file has three broken employees: one missing a field, one with the
wrong type, one with an extra field. Three different error messages for three
different kinds of wrong.

The last two lines are the "Object vs object" note from the slide. Lowercase
`object` refuses a string. Capital `Object` accepts it. Almost nobody wants
capital `Object`.
