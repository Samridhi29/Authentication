import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.routes';
import errorHandler from './middlewares/error.middleware';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('✅ Auth API is running!');
});
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
