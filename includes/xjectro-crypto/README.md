# @xjectro/crypto 🔐

A lightweight cryptography utility package for generating secure hashes and unique identifiers in your JavaScript/TypeScript applications.

## 🚀 Installation

```bash
# Using npm
npm install @xjectro/crypto

# Using yarn
yarn add @xjectro/crypto

# Using pnpm
pnpm add @xjectro/crypto
```

## ✨ Features

- 🔄 Generate deterministic hashes from objects
- 🆔 Create unique identifiers with timestamps
- 🧩 Simple API with TypeScript support
- 🔧 Zero external dependencies (uses Node.js crypto module)

## 🛠️ Usage

### Generate Hash

Create a unique hash from an object with timestamp:

```typescript
import { generateHash } from "@xjectro/crypto";

const payload = {
  userId: "12345",
  action: "login",
  role: "admin",
};

// Generate a hash in hex format
const hexHash = generateHash("hex", payload);
console.log(hexHash); // 1621234567890-a1b2c3d4e5f6g7h8i9j0...

// Generate a hash in base64 format
const base64Hash = generateHash("base64", payload);
console.log(base64Hash); // 1621234567890-YTFiMmMzZDRlNWY2ZzdoOGk5ajA=...

// Generate a hash in base64url format
const base64UrlHash = generateHash("base64url", payload);
console.log(base64UrlHash); // 1621234567890-YTFiMmMzZDRlNWY2ZzdoOGk5ajA...
```

### Generate Unique ID

Create a unique identifier with timestamp and random bytes:

```typescript
import { generateId } from "@xjectro/crypto";

const uniqueId = generateId();
console.log(uniqueId); // 1621234567890-a1b2c3d4e5f6g7h8i9j0
```

## 📚 API Reference

### `generateHash(digest, payload)`

Generates a unique hash string based on a payload object and current timestamp.

**Parameters:**

- `digest` - Output format: 'hex', 'base64', or 'base64url'
- `payload` - Object containing string values to include in the hash

**Returns:** String in format `timestamp-hash`

### `generateId()`

Generates a unique identifier string using current timestamp and random bytes.

**Returns:** String in format `timestamp-randomValue`

## 🔄 Compatibility

- Works in Node.js environments
- Requires TypeScript for type definitions (optional)
