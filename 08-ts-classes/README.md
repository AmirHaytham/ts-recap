# 08. Classes, access modifiers, readonly

From the classes slide (page 023).

The slide's `Person` with `private`, `public`, `protected` and `readonly`,
typed properly, plus a subclass that uses the protected field, plus the two
`UserService` versions from the slide side by side.

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

Put `UserServiceLong` and `UserService` next to each other on screen. Same
behaviour, one line instead of three. That parameter property style is what
every NestJS service they see later will look like.

The last line of `npm start` prints the whole object as JSON, `ssn` included.
`private` is enforced by the compiler, not at runtime. Good moment to say it is
about intent and safety, not security.

In the mistakes, `lastName` fails from outside but works inside `Employee`.
That is the whole difference between private and protected.
