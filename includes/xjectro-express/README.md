# ✨ **@xjectro/express**

✨🚀 A Node.js package providing an Express.js server core and helper tools, compatible with both ESM and CommonJS 📦

## Features

- 🚀 Server initialization and auto-configuration (CORS, session, etc.)
- 🔒 Zod-based validation middleware
- 🚨 Custom HTTP error classes
- 💬 Centralized response and error handling
- 🆔 Unique ID and hash generation functions
- 🔑 JWT token management

## Installation

```bash
npm install @xjectro/express
```

## Quick Start

```typescript
import { ServerCore } from "@xjectro/express";

// ESM (TypeScript/JavaScript)
const server = new ServerCore({
  port: 3000,
  cors: { origin: "*" },
});

server.on("listen", (url) => {
  console.log(`Server is running at: ${url}`);
});
```

```javascript
// CommonJS usage
const { ServerCore } = require("@xjectro/express");

const serverCJS = new ServerCore({
  port: 3000,
  cors: { origin: "*" },
});

serverCJS.on("listen", (url) => {
  console.log(`Server is running at: ${url}`);
});
```

## Route Definition and Handler Usage

```typescript
import { RoutesHandler, wrapHandler } from "@xjectro/express-core/handlers";
import { validate } from "@xjectro/express-core/middleware/validate";
import { z } from "zod";

class UserHandler {
  constructor(router) {
    router.get(
      "/",
      wrapHandler(async (req, res) => {
        return { data: "User list" };
      }),
    );

    router.post(
      "/",
      validate(z.object({ name: z.string() })),
      wrapHandler((req, res) => {
        const { name } = req.body;
        return { data: `User created: ${name}` };
      }),
    );
  }
}

new RoutesHandler({
  app: server.app,
  routes: [{ prefix: "/users", handlerClass: UserHandler }],
});
```

## Error Handling

`@xjectro/express` uses custom exception classes such as `BadRequestError`, `NotFoundError`, `UnauthorizedError`, `ForbiddenAccessError`, `UnprocessableEntityError`, and `InternalServerError` to handle errors centrally.

## Helper Functions

- `generateId()`, `generateHash()` – Generate unique IDs and hashes using timestamps and random values
- `generateToken()`, `verifyToken()` – Generate and verify JSON Web Tokens (JWT)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
