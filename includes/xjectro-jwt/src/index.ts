import * as jwt from "jsonwebtoken";
import type { JwtPayload, SignOptions } from "jsonwebtoken";

type SecretKey = string;

interface AdditionalInfo {
  expiresIn?: string | number;
  secret: SecretKey;
}

function getSecret(secretKey: SecretKey): string {
  const secret = `${secretKey}_SECRET`;
  return secret;
}

export function generateToken(
  payload: Record<string, unknown>,
  options: AdditionalInfo,
): string {
  const secretKey = getSecret(options.secret);

  const signOptions: SignOptions = {
    expiresIn: options.expiresIn as number | undefined,
  };

  return jwt.sign(payload, secretKey, signOptions);
}

export function verifyToken(
  token: string,
  options: AdditionalInfo,
): JwtPayload | string {
  try {
    const secretKey = getSecret(options.secret);
    return jwt.verify(token, secretKey);
  } catch {
    throw new Error("Invalid or expired token");
  }
}
