A full-featured authentication backend built with **Express**, **TypeScript**, and **Prisma ORM**, supporting **JWT-based login**, **role-based access control**, and **MySQL** database.

---

## 🚀 Features

- ✅ User Signup with validation  
- ✅ Login with hashed password and JWT token  
- ✅ Role-based authorization (user / admin)  
- ✅ Get current logged-in user (/me)  
- ✅ Zod-based input validation  
- ✅ Error-handling middleware  
- ✅ Secure .env support  
- ✅ Prisma ORM with MySQL  

---

## 🧠 Tech Stack

- Node.js + Express  
- TypeScript  
- Prisma ORM  
- MySQL  
- JWT + Bcrypt  
- Zod for validation  
- Dotenv, Nodemon, TS-Node  

---

## 🗂️ Folder Structure
```
src/
├── controllers/ # Route logic (signup, login, me)
├── middlewares/ # Auth, role check, Zod, error handlers
├── routes/ # Express route definitions
├── utils/ # JWT helpers, password hash utils
├── validators/ # Zod schemas for input validation
├── index.ts # App entry point

prisma/
├── schema.prisma # Prisma schema definition

.env # Environment variables
package.json # Project dependencies
tsconfig.json # TypeScript configuration
README.md

```
## 📡 API Endpoints

### 📝 Auth Routes

| Method | Endpoint           | Auth    | Description                          |
|--------|--------------------|---------|--------------------------------------|
| POST   | `/api/auth/signup` | Public  | Register a new user                  |
| POST   | `/api/auth/login`  | Public  | Login and receive JWT                |
| GET    | `/api/auth/me`     | Private | Get current logged-in user details   |

```


