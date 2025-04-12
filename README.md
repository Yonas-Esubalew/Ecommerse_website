
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


Getting Started

Clone the project repository using Git.
Navigate into the project folder and install dependencies for both backend and frontend using npm install.
Create a .env file inside the backend directory to hold environment variables including your MongoDB URI, JWT secret, and Stripe secret.
Start the backend server using npm run dev.
Start the frontend server using npm run dev or npm start.
Access the application at http://localhost:8080.

Install Dependencies

Backend:
Navigate to the backend folder
Run: npm install

Frontend:
Navigate to the frontend folder
Run: npm install

Environment Variables

Create a .env file in the backend directory with the following keys:

MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
STRIPE_SECRET = your_stripe_secret_key

Replace these values with your actual secure credentials.
Important: Do NOT commit your .env file to GitHub — it’s ignored automatically for security.

Running the App Locally

Start backend:
Navigate to backend
Run: npm run dev

Start frontend:
Navigate to frontend
Run: npm run dev

🌐 Deployment

Frontend is deployed on Vercel.
During deployment, make sure to add required environment variables in Vercel’s dashboard.
Use the REACT_APP_ prefix for Create React App or VITE_ prefix for Vite (example: REACT_APP_API_URL or VITE_API_URL).
This ensures the frontend connects correctly to your backend.

Backend is deployed using Railway.
Push your backend code to GitHub and connect the repo with Railway.
Set environment variables (MONGO_URI, JWT_SECRET, STRIPE_SECRET) via the Railway UI.
Railway will auto-detect and deploy your Node.js app.
Make sure your backend package.json contains the correct start script like:
"start": "node server.js"

This file is ignored by Git, so it stays private.
For frontend, define this environment variable on Vercel:
REACT_APP_API_URL = https://backend.up.railway.app
This makes sure frontend API calls route correctly to the live backend.

💡 Usage

Register or log in as a user to access the cake store
Browse cakes by category or keyword
Add products to your cart
Checkout securely using Stripe
View past orders and track statuses
Admins can manage cakes, users, and orders from the admin panel

🛠 Customization

Replace product images in the frontend
Update site text or UI easily using TailwindCSS classes
Add features to the admin dashboard, such as charts or sales analytics
Use a translation library (like react-i18next) to support multiple languages

🤝 Contributing

Fork the repo
Create a feature branch
Commit your changes
Push to your fork
Open a pull request
All contributions are welcome and appreciated!

📢 Acknowledgements

React – https://reactjs.org
Express – https://expressjs.com
MongoDB – https://www.mongodb.com
Stripe – https://stripe.com
Railway – https://railway.app
Vercel – https://vercel.com

👨‍💻 Author

Yonas Esubalew
Email: yonasatwork999@gmail.com
Website: https://yonas-esubalew.vercel.app

🌍 Demo

Live site: https://ecommerse-website-8xfg.vercel.app
