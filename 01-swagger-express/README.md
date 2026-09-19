# 01. Swagger with Express

From the Swagger slides (pages 009 to 014).

A small Task Manager API with its whole contract written in `openapi.yaml`, served
as interactive docs at `/api-docs`. It is the spec from the slides, filled in so
every part of the structure shows up at least once:

| Slide idea | Where it is in `openapi.yaml` |
|---|---|
| meta info | `openapi`, `info`, `servers` at the top |
| path parameter | `/tasks/{id}` |
| query parameter | `completed` on `GET /tasks` |
| requestBody | `POST /tasks`, `PUT /tasks/{id}`, `POST /login` |
| responses | every operation, with 200, 201, 204, 400, 401, 404 |
| tags | `Tasks` and `Auth` |
| operationId | on every operation |
| reusable components | `Task` schema, `TaskIdParam`, `NotFound` response |

## Run it

```bash
npm install
```

```bash
npm start
```

Open <http://localhost:3000/api-docs>.

The slide's setup is exactly what `index.js` does: install
`express swagger-ui-express yamljs`, load `openapi.yaml`, mount it on
`/api-docs` above the routes.

## Worth showing

Open `POST /login`, click Try it out, execute with the example body. Then change
the password and run it again for a 401, then delete the email for a 400. That is
the testing slide from start to finish: request URL, request body, response
body, status code, all on screen.

Try `GET /tasks` with `completed` set to true, then false. Point at the request
URL Swagger builds, `?completed=true`. Same query param idea as the assignment.

Change a description in `openapi.yaml` and restart. The docs update. Then ask
what happens if someone changes the route in `index.js` and forgets the YAML.
Nothing stops them. The spec is a contract, and keeping it honest is on you.

Scroll to Schemas at the bottom of the page. That is the `components` section
rendered, and every `$ref` in the file points there.
