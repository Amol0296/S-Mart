## Auth Service – Functional Overview
### Responsibilities
 - User registration (with email, password, role)
 - User login (generate access + refresh tokens)
- Token refresh endpoint

- Logout (invalidate refresh token)

- Password hashing

- JWT-based authentication

- Role-based authorization (basic setup)

- Email uniqueness validation

### Architecture Decisions
- Framework	Node.js + Express (NestJS if you prefer DI)
- DB	MongoDB
- Auth	JWT (access + refresh tokens)
- Password Hashing	bcrypt
- Security Middlewares	Helmet, CORS, Rate-limiter
- Token Storage	MongoDB (optional Redis later for session mgmt)
- Token Expiry	Short-lived access (15m), long-lived refresh (7d)

auth-service/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   ├── config/
│   └── index.js
├── tests/
├── .env
├── Dockerfile
├── docker-compose.yml (root)
└── package.json

### 📌 Key Endpoints
Method	Route	Description
- POST	/api/auth/register	Create user
- POST	/api/auth/login	Login and issue tokens
- POST	/api/auth/refresh	Issue new access token
- POST	/api/auth/logout	Invalidate refresh token
- GET	/api/auth/me	Get current user info

🔐 JWT Strategy
Access Token:

Short expiry (e.g., 15 minutes)

Payload: userId, role

Stored in memory (frontend)

Refresh Token:

Long expiry (e.g., 7 days)

Stored in DB (or Redis)

Stored in secure HTTP-only cookie (frontend)

On logout, invalidate refresh token.

🛡️ Middleware Needed
authMiddleware.js – Verify JWT from headers

roleMiddleware.js – Check user role

errorHandler.js – Centralized error handler

rateLimiter.js – Prevent abuse

✅ Validations to Include
Unique email

Password min length

Role (enum): user, admin (seeded or hardcoded)

Email format

Password confirmation match (optional)

🧪 Testing Plan
Unit tests:

Registration

Login

Token generation

Integration test:

Login + Refresh + Logout flow

🔧 Tools/Libraries to Use
Purpose	Library
Server	Express
DB ORM	Mongoose
Auth	jsonwebtoken
Password hashing	bcrypt
Validation	express-validator / Joi
Logging	Winston
Testing	Jest + Supertest
Env Config	dotenv

🔌 API Gateway Notes
The API Gateway will forward /api/auth/* to this service

Set up CORS to accept requests from the frontend

Add health check route: /api/auth/health