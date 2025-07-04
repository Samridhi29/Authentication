import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => bcrypt.hash(password, 10);
export const comparePassword = (input: string, hashed: string) => bcrypt.compare(input, hashed);
