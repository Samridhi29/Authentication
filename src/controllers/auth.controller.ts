import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const signup = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

const hashed = await bcrypt.hash(password, 10);

const user = await prisma.user.create({
  data: {
    username,
    email,
    password: hashed,  // Use hashed password here
    role,
  },
});

res.status(201).json({
  message: 'User created',
  user: {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  },
});
}
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const user = (req as any).user;

  try {
    const currentUser = await prisma.user.findUnique({
      where: { id: user.userId },
      select: { id: true, email: true, role: true }
    });

    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user: currentUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch current user' });
  }
};
