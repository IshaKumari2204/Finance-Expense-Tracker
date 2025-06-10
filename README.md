# 💰 Smart Expense Tracker (MERN)

A full-stack web application to track your personal and business expenses. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the app allows users to securely log in, add/edit/delete expenses, and view categorized and filtered transaction histories.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based, secured)
- ➕ Add, Edit, and Delete transactions
- 📅 Filter transactions by **Type** and **Date Range**
- 📊 Categorize transactions (e.g., Food, Travel, Bills, etc.)
- 📁 Local MongoDB integration
- 🧠 Clean React Context API for global state management
- 🌙 Dark-themed modern UI (navy blue base)
- 📈 Analytics dashboard (coming soon)


## 🛠️ Tech Stack

**Frontend**
- React + Vite
- CSS (Dark Theme)
- Axios
- React Router DOM

**Backend**
- Express.js
- MongoDB (local)
- Mongoose
- JWT + bcrypt
- dotenv + nodemon

---

# 💰 Smart Expense Tracker (MERN)

A full-stack web application to track your personal and business expenses. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the app allows users to securely log in, add/edit/delete expenses, and view categorized and filtered transaction histories.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based, secured)
- ➕ Add, Edit, and Delete transactions
- 📅 Filter transactions by **Type** and **Date Range**
- 📊 Categorize transactions (e.g., Food, Travel, Bills, etc.)
- 📁 Local MongoDB integration
- 🧠 Clean React Context API for global state management
- 🌙 Dark-themed modern UI (navy blue base)
- 📈 Analytics dashboard (coming soon)

---

## 📷 Screenshots

| Signup Page | Dashboard |
|-------------|-----------|
| ![Signup](screens/signup.png) | ![Dashboard](screens/dashboard.png) |

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- CSS (Dark Theme)
- Axios
- React Router DOM

**Backend**
- Express.js
- MongoDB (local)
- Mongoose
- JWT + bcrypt
- dotenv + nodemon

---

## 📂 Folder Structure

client/
├── src/
│ ├── components/ # Navbar, Form, TransactionCard
│ ├── pages/ # Login, Signup, Dashboard
│ ├── context/ # AuthContext
│ ├── App.jsx
│ └── main.jsx

server/
├── controllers/ # authController.js, transactionController.js
├── middleware/ # authMiddleware.js
├── models/ # userModel.js, transactionModel.js
├── routes/ # authRoutes.js, transactionRoutes.js
├── config/ # db.js
└── index.js

### ⚙️ Backend Setup

```bash
cd server
npm install

Create .env in the server/ folder:
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/expense-tracker
JWT_SECRET=yourJWTSecretHere

Start the server:
cd client
npm install
npm run dev
Frontend runs on http://localhost:5173/

🔐 Login Credentials (Test)
Use Signup form to register new users.

🛣️ API Endpoints
Auth
| Method | Route                | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login existing user |

Transactions
| Method | Route                         | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | `/api/transaction/add`        | Add a new transaction |
| POST   | `/api/transaction/get`        | Get user transactions |
| PUT    | `/api/transaction/update/:id` | Update a transaction  |
| DELETE | `/api/transaction/delete/:id` | Delete a transaction  |

🔒 All transaction routes are protected with JWT middleware
