# MERN Ecommerce Cake Shop

An **online cake shopping website** built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to browse, order, and manage their favorite cakes effortlessly.

---

## Features

- **User Authentication**: Register and log in securely with JSON Web Tokens (JWT).
- **Product Management**: Add, edit, and delete cakes (admin feature).
- **Shopping Cart**: Add cakes to your cart and manage quantities easily.
- **Order Management**: View order history and track the status of current orders.
- **Responsive Design**: Optimized for both desktop and mobile platforms.
- **Payment Integration**: Checkout with secure online payments.
- **Search and Filter**: Quickly find cakes by categories or keywords.

---

## Tech Stack

### Frontend
- React.js
- React Router
- Redux Toolkit (for state management)
- TailwindCSS / Material-UI (for styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- Stripe API (for payment processing)

### Additional Tools
- JWT (for authentication)
- bcrypt.js (for password hashing)
- dotenv (for environment variables)

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-ecommerce-cake-shop.git
   cd mern-ecommerce-cake-shop
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following keys:
     ```env
     MONGO_URI= mongodb+srv://yonasbe999:5axyN975FWJXshdR@cluster0.3p96jr8.mongodb.net/Ecommerse_App?retryWrites=true&w=majority&appName=Cluster0
     JWT_SECRET= 5axyN975FWJXshdR
     STRIPE_SECRET=yonasbe999
     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. Open your browser and visit: `http://localhost:3000`.

---

## File Structure

```
mern-ecommerce-cake-shop/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── config/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── .gitignore
```

---

## Usage

- Register or log in to access the platform.
- Browse cakes by category or use the search bar.
- Add items to your shopping cart and proceed to checkout.
- View your order history and manage your account details.

## Contributing

Contributions are welcome! If you have suggestions or want to improve the project, feel free to:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

---

## Contact

- **Author**: [Yonas Esubalew](https://github.com/Yonas-Esubalew)
- **Email**: yonasatwork999@gmail.com
