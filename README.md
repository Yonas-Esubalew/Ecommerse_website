# 🎂 MERN Ecommerce Cake Shop

An elegant and fully responsive online cake shopping website built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project allows users to browse, order, and manage cakes with ease, complete with admin features and secure payment integration.

![Homepage](https://ecommerse-website-8xfg.vercel.app/homepage-banner.jpg)

**Live Demo**  
https://ecommerse-website-8xfg.vercel.app

---

## ✨ Features

User authentication using JSON Web Tokens for secure login and registration.  
Admin dashboard for managing cake products and orders.  
Shopping cart with dynamic quantity updates and local state persistence.  
Stripe API integrated for secure online payments.  
Order management system with status tracking and order history.  
Search and filter functionality for quick product discovery.  
Fully responsive design optimized for desktop and mobile.  
Simple and intuitive UI for better customer experience.

---

## 🧰 Tech Stack

**Frontend**  
React.js for building the user interface  
React Router for navigation  
Redux Toolkit for global state management  
Tailwind CSS and Material UI for styling and UI components

**Backend**  
Node.js and Express.js to build REST APIs  
MongoDB with Mongoose for the database layer  
Stripe for secure payment processing  
JWT for authentication  
bcrypt.js for password hashing  
dotenv for managing environment variables  
nodemon for backend development convenience

---

## 🚀 Getting Started

Clone the project repository using Git.  
Navigate into the project folder and install dependencies for both backend and frontend using `npm install`.  
Create a `.env` file inside the `backend` directory to hold environment variables including your MongoDB URI, JWT secret, and Stripe secret.  
Start the backend server using `npm run dev`.  
Start the frontend server using `npm run dev` or `npm start`.  
Access the application at `http://localhost:3000`.

---

## 🌐 Deployment

Frontend is deployed on Vercel. During deployment, ensure that environment variables are added with a `CRA_` prefix (e.g., `REACT_APP_API_URL`) to work properly with Vite or Create React App.

Backend is deployed using Railway. Push the backend code to GitHub and connect it with Railway. Set environment variables such as `MONGO_URI`, `JWT_SECRET`, and `STRIPE_SECRET` in the Railway dashboard. Railway auto-detects and deploys Node.js apps. Ensure the backend has the correct start script like `"start": "node server.js"`.

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder with the following keys

MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret_key STRIPE_SECRET=your_stripe_secret_key

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
Website: [https://github.com/Yonas-Esubalew](https://github.com/Yonas-Esubalew)

---

## 🌍 Demo

Try the live demo here:  
https://ecommerse-website-8xfg.vercel.app
