import jwt, { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';
import { StringValue } from 'ms';

const JWT_SECRET: Secret = process.env.JWT_SECRET || 'secret';

export const signToken = (
  payload: string | object | Buffer,
  expiresIn: number | StringValue = '1h'
): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, JWT_SECRET);
};
