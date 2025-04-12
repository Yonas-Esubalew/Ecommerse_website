# 🎂 MERN Ecommerce Cake Shop

[![Homepage Screenshot](https://github.com/Yonas-Esubalew/Ecommerse_website/blob/main/Screenshot%202025-04-11%20221020.png?raw=true)](https://ecommerse-website-8xfg.vercel.app)


An elegant and modern **online cake shop** built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). This platform allows users to browse delicious cakes, add them to their cart, checkout with secure payment, and track orders — all from a beautiful and responsive UI.

🔗 **Live Demo**: [https://ecommerse-website-8xfg.vercel.app](https://ecommerse-website-8xfg.vercel.app)

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🛍️ Cake Management (Admin can create, edit, delete)
- 🛒 Cart System with Quantity Updates
- 💳 Stripe Payment Integration
- 📦 Order Tracking & History
- 🔍 Search and Filter by Category or Keyword
- 🌙 Dark Mode Ready (optional)
- 📱 Fully Responsive (Mobile & Desktop)
- 🧑‍🍳 Built with Real Cake Shop UX in Mind

---

## 🧰 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS / Material UI

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Stripe API

### Additional Tools
- JSON Web Token (JWT)
- bcrypt.js
- dotenv
- nodemon

---


### Clone the Repository

git clone https://github.com/Yonas-Esubalew/ecommerce-website.git
cd ecommerce-website
2. Install DependenciesbashCopy

#### Backend
cd backend
npm install

#### Frontend
-cd ../frontend
-npm install
#### Environment Variables
Create a .env file in the backend directory:

-MONGO_URI=your_mongodb_connection_string
-JWT_SECRET=your_jwt_secret
-STRIPE_SECRET=your_stripe_secret_key
-✅ Replace these values with your actual secure credentials.
-🔐 Important: Do NOT commit .env to GitHub — it’s in .gitignore for security.

### Running the App Locally

#### Start backend
-cd backend
-npm run dev

#### Start frontend
-cd ../frontend
-npm run dev
-Now go to http://localhost:3000 to browse the frontend. The backend should be running on http://localhost:8080.

### 🌍 Deployment
-Frontend (on Vercel)
-Push your frontend code to GitHub.
-Go to https://vercel.com and import your frontend repo.

### During deployment:

-Set REACT_APP_API_URL=https://your-backend-service.up.railway.app in Environment Variables.
-Deploy and you’ll get a .vercel.app domain.
-(Optional) Customize the domain in Vercel → Settings → Domains.

Backend (on Railway)
Go to https://railway.app.

Create a new project and link your backend GitHub repo.

"start": "node server.js"
Deploy and get your backend domain like: https://your-backend.up.railway.app

Register or log in as a user.
Browse and add cakes to your cart.
Checkout using Stripe (test cards in dev).
View your past orders in your profile.
Admins can manage cakes and orders from admin panel.

### 💡 Contribution Guide
Contributions are welcome! To contribute:

#### Fork the repo
#### Create your branch
git checkout -b feature/your-feature

#### Commit your changes
git commit -m "Add: Your feature"

#### Push to GitHub
git push origin feature/your-feature

#### Open a Pull Request
🧠 Acknowledgements
React

-MongoDB
-Express
-Stripe
-Vercel
-Railway

#### **👤 Author
Yonas Esubalew
-📧 Email: yonasatwork999@gmail.com
-🌐 Website: https://yonas-esubalew.vercel.app

#### 🔗 Live Demo
🚀 https://ecommerse-website-8xfg.vercel.app
