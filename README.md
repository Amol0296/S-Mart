# S-Mart
An Online shopping platform

## Microservices Architecture Overview
🔗 Frontend (React)
Client App: Built with React, communicates with an API Gateway

🔧 Backend Microservices (Node.js)
Service	Description	DB
- Auth Service - Login, registration, JWT token, roles	MongoDB
- User Service	Profile, addresses, user info	MongoDB
- Product Service	Catalog, search, filter, ratings	MongoDB
- Order Service	Cart, order placement, order history	PostgreSQL
- Inventory Service	Manage stock levels	PostgreSQL
- Payment Service	Stripe/PayPal integration	N/A (external)
- Notification Service	Send emails/SMS	Redis (queue)
- API Gateway	Routes all frontend calls to backend services	N/A

## Tech Stack

* Layer	Tech
* Frontend	React + Redux Toolkit + Axios
* Backend	Node.js + Express/NestJS
* Database	MongoDB (NoSQL), PostgreSQL
* Messaging	RabbitMQ or Kafka
* Logging	Winston or Morgan
* Testing	Jest + Supertest
* API Documentation	Swagger
* Security	Helmet, CORS, Rate Limiting
* RBAC	Role-Based Access Control
* Auth	JWT, Bcrypt
* Caching	Redis
* Deployment	Docker + Docker Compose
* Monitoring	Prometheus + Grafana

## Folder Structure

* ecommerce-app/
* ├── api-gateway/
* ├── auth-service/
* ├── user-service/
* ├── product-service/
* ├── order-service/
* ├── inventory-service/
* ├── payment-service/
* ├── notification-service/
* ├── frontend-react/
* └── docker-compose.yml