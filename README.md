# 🛒 My-Cart Backend

A RESTful E-commerce Backend API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose**.

This backend handles authentication, product management, and cart functionality with JWT-based protection.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
- Postman (API Testing)

---

# 📂 Project Folder Structure

```
My-Cart---Backend/
│
├── node_modules/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── cart.controller.js
│   │   └── product.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── cart.model.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── cart.routes.js
│   │   └── product.routes.js
│   │
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

# ⚙️ Installation Guide

## 1️⃣ Install Node.js

Make sure Node.js is installed:

```bash
node -v
npm -v
```

---

## 2️⃣ Clone Repository

```bash
git clone https://github.com/sartaza123/My-Cart---Backend.git
cd My-Cart---Backend
```

---

## 3️⃣ Install Node Modules

```bash
npm install
```

This installs all dependencies from `package.json`.

---

## 4️⃣ Install Nodemon (Optional but Recommended)

```bash
npm install -g nodemon
```

OR use without global install:

```bash
npx nodemon server.js
```

---

## 5️⃣ Create Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

---

## 6️⃣ Run the Server

### Using Node

```bash
node server.js
```

### Using Nodemon

```bash
npx nodemon server.js
```

Server will run on:

```
http://localhost:4000
```

---

# 🔐 Features

- User Registration
- User Login with JWT Authentication
- Password Hashing using bcrypt
- Product CRUD Operations
- Cart Management (Protected Routes)
- MongoDB Atlas Cloud Database Integration
- Error Handling with try-catch
- Secure JWT Route Protection

---

# 🗄 Database

MongoDB Atlas is used as the cloud database.

Collections:

- products
- users
- carts

All product, user, and cart data are stored securely in MongoDB Atlas.

---

# 🧪 Testing

All APIs were tested using **Postman**.

Tested functionalities include:

- User Registration
- User Login
- Product CRUD
- Cart CRUD
- JWT Protected Routes
- MongoDB Data Verification

Screenshots are included in submission.

---

# 👨‍💻 Author

**Md Sartaz Ansari**  
Full-Stack Developer  
Node.js | Express | MongoDB

GitHub: https://github.com/sartaza123

---

# ✅ Project Status

✔ Authentication Completed  
✔ Product CRUD Completed  
✔ Cart CRUD Completed  
✔ JWT Protection Implemented  
✔ MongoDB Atlas Connected  
✔ Fully Tested and Working with POSTMAN

---
