# 🔐 @xjectro/jwt

A lightweight wrapper around JSON Web Tokens (JWT) for easy token generation and verification in Node.js applications.

## 📦 Installation

```bash
# Using npm
npm install @xjectro/jwt

# Using yarn
yarn add @xjectro/jwt

# Using pnpm
pnpm add @xjectro/jwt
```

## ✨ Features

- 🚀 Simple API for JWT token generation
- ✅ Token verification with error handling
- ⏱️ Customizable expiration times
- 📘 TypeScript support

## 🔧 Usage

### 🔑 Generating a Token

```typescript
import { generateToken } from "@xjectro/jwt";

// Create a payload with user data
const payload = {
  userId: "12345",
  role: "admin",
};

// Generate a token
const token = generateToken(payload, {
  secret: "your_secret_key",
  expiresIn: "1h", // or any valid time value: '2d', '10h', '7d', etc.
});

console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

### 🔎 Verifying a Token

```typescript
import { verifyToken } from "@xjectro/jwt";

try {
  // Verify and decode the token
  const decoded = verifyToken(token, {
    secret: "your_secret_key",
  });

  console.log(decoded);
  // { userId: '12345', role: 'admin', iat: 1620000000, exp: 1620003600 }
} catch (error) {
  console.error("Token verification failed:", error.message);
}
```

## 📚 API Reference

### 🏭 generateToken(payload, options)

Generates a JWT token with the provided payload.

**Parameters:**

- `payload` (Record<string, unknown>): The data to be encoded in the token
- `options` (object):
  - `secret` (string): The secret key used to sign the token
  - `expiresIn` (string | number, optional): Token expiration time in various formats

**Returns:**

- (string): The generated JWT token

### 🔍 verifyToken(token, options)

Verifies and decodes a JWT token.

**Parameters:**

- `token` (string): The JWT token to verify
- `options` (object):
  - `secret` (string): The secret key used to verify the token

**Returns:**

- (JwtPayload | string): The decoded token payload

**Throws:**

- Error: When the token is invalid or expired

## 🛡️ Security Notes

- 🔒 Always store your secret keys securely and never expose them in client-side code
- 🔐 Use environment variables for secret key storage
- 💪 Consider using strong, unique secret keys for different applications
