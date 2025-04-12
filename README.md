
# 🎂 MERN Ecommerce Cake Shop

![Homepage Banner](https://ecommerse-website-8xfg.vercel.app/homepage-banner.jpg) <!-- Replace with your real banner image if available -->

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
- Tailwind CSS 

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

#### Clone the Repository

```bash
git clone https://github.com/Yonas-Esubalew/mern-ecommerce-cake-shop.git
cd mern-ecommerce-cake-shop


#### 🚀 Getting Started

Clone the project repository using Git.  
Navigate into the project folder and install dependencies for both backend and frontend using `npm install`.  
Create a `.env` file inside the `backend` directory to hold environment variables including your MongoDB URI, JWT secret, and Stripe secret.  
Start the backend server using `npm run dev`.  
Start the frontend server using `npm run dev` or `npm start`.  
Access the application at `http://localhost:8080`.

Install Dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

Environment Variables
Create a .env file in the backend directory:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
✅ Replace these values with your actual secure credentials. 🔐 Important: Do NOT commit .env to GitHub — it’s in .gitignore for security.

Running the App Locally

# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev

## 🌐 Deployment

Frontend is deployed on Vercel. During deployment, ensure that environment variables are added with a `CRA_` prefix (e.g., `REACT_APP_API_URL`) to work properly with Vite or Create React App.

Backend is deployed using Railway. Push the backend code to GitHub and connect it with Railway. Set environment variables such as `MONGO_URI`, `JWT_SECRET`, and `STRIPE_SECRET` in the Railway dashboard. Railway auto-detects and deploys Node.js apps. Ensure the backend has the correct start script like `"start": "node server.js"`.

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder with the following keys

Never expose this file. It's already included in `.gitignore`.
For frontend on Vercel, define the following environment variable:
REACT_APP_API_URL=https://backend.up.railway.app

This will make sure API requests are routed to your deployed backend.

---

## 💡 Usage

Register or log in as a user to access the store.  
Browse cakes by category or keyword.  
Add products to cart and proceed to checkout using Stripe.  
View past orders and order details from the profile section.  
Admins can access the admin panel to manage cakes and orders.

---

## 🛠 Customization

You can replace product images, update text content, or change the theme using Tailwind utility classes.  
Easily integrate new payment methods or enhance the admin dashboard with analytics.  
To localize or translate the app, use a library like `react-i18next`.

---

## 🤝 Contributing

Fork the repository and create a new feature branch.  
Make your changes and commit them with a clear message.  
Push your branch to GitHub and open a Pull Request.  
All contributions are appreciated and reviewed promptly.

---

## 📢 Acknowledgements

React - https://reactjs.org  
Express - https://expressjs.com  
MongoDB - https://www.mongodb.com  
Stripe - https://stripe.com  
Railway - https://railway.app  
Vercel - https://vercel.com

---

## 👨‍💻 Author

**Yonas Esubalew**  
Email: yonasatwork999@gmail.com  
Website: [https://yonas-esubalew.vercel.app](https://yonas-esubalew.vercel.app)

---

## 🌍 Demo

Try the live demo here:  
https://ecommerse-website-8xfg.vercel.app
