# Authentication System

A full-stack authentication system built with React, Node.js, Express, and MongoDB.

## Overview

This project provides a complete authentication system with user registration, login, and profile viewing capabilities. The application uses JWT (JSON Web Token) for authentication, bcrypt for password hashing, and cookies for maintaining user sessions.

## Project Structure

The project is divided into two main parts:
- **API**: Backend Express server
- **Client**: Frontend React application

## Features

- User registration with email and password
- User login with JWT authentication stored in cookies
- Protected routes requiring authentication
- Profile viewing for authenticated users
- Secure password storage with bcrypt hashing

## Tech Stack

### Backend
- Node.js with Express.js (v5.1.0)
- MongoDB with Mongoose (v8.13.2)
- JWT for authentication
- bcrypt for password hashing
- Cookie-parser for handling cookies
- CORS for secure cross-domain requests

### Frontend
- React 19
- React Router v7
- Tailwind CSS v4.1.3
- Vite as build tool

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB account
- Git

### Installation

1. Clone the repository
```
git clone <repository-url>
cd auth
```

2. Install backend dependencies
```
cd api
npm install
```

3. Install frontend dependencies
```
cd ../client
npm install
```

4. Create a `.env` file in the `api` directory with the following:
```
JWT=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server
```
cd api
node server.js
```

2. Start the frontend development server
```
cd ../client
npm run dev
```

3. Access the application at `http://localhost:5173`

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login a user and receive a JWT token
- `GET /` - Get user profile (protected route)
- `GET /test` - Check if server is running

## Security Considerations

- Passwords are securely hashed using bcrypt before storing
- JWT authentication with secure cookies
- CORS is configured to allow only specific origins
- Environment variables for sensitive information
- `.env` files are excluded from git using `.gitignore`

## Development

### Frontend Development

The React frontend is set up with:
- Tailwind CSS for styling
- React Router for navigation
- Vite for fast development and optimized builds

### Backend Development

The Express backend provides:
- RESTful API endpoints
- Middleware for authentication
- MongoDB connection with Mongoose
- Cookie-based session management

## Important Notes

- Make sure not to commit your `.env` file as it contains sensitive information
- The backend server runs on port 8080 by default
- Frontend development server runs on port 5173 with Vite
