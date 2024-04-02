# Food Ordering App Backend

Welcome to the backend repository for the Food Ordering App, built with Node.js. This backend provides essential functionalities for user authentication, managing users, restaurants, and orders.

## Technologies Used:
- Node.js : 
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- cors
- morgan
- cookie-parser
- dotenv
- colors
- Insomnia (For Testing API)

## Features:
- User Authentication (Register, Login, Logout)
- CRUD operations for Users
- CRUD operations for Restaurants
- CRUD operations for Orders
- Role-based Access Control using JWT verification

## Installation:
1. Clone the repository: `git clone https://github.com/Mithun20522/Restaurent-backend-Node.js.git <path-to-clone>`
2. Install dependencies: `npm i express mongoose cors nodemon bcryptjs jsonwebtoken cookie-parser morgan dotenv nodemon colors`
3. Set up environment variables by creating a `.env` file and defining them.

## Usage:
1. Start the server: `npm start` or `npm run dev` (with nodemon)
2. Access the routes as listed below:

## Routes:
- **Authentication:**
  - Register: `/api/auth/register`
  - Login: `/api/auth/login`
  - Logout: `/api/auth/logout`

- **Users:**
  - Get User by ID: `/api/user/get-user/:id`
  - Get Users: `/api/user/get-users`
  - Update User: `/api/user/update-user/:id`
  - Delete User: `/api/user/delete-user/:id`

- **Restaurants:**
  - Get Restaurant by ID: `/api/restaurent/get-restaurent/:id`
  - Get Restaurants: `/api/restaurent/get-restaurents`
  - Create Restaurant: `/api/restaurent/add-restaurent`
  - Update Restaurant: `/api/restaurent/update-restaurent/:id`
  - Delete Restaurant: `/api/restaurent/delete-restaurent/:id`

- **Orders:**
  - Get Orders: `/api/order/get-orders`
  - Create Order: `/api/order/create-order`
  - Update Order: `/api/order/update-order/:id`
  - Delete Order: `/api/order/delete-order/:id`

## Deployment:
This backend has been deployed on [Live URL](https://food-ordering-app-backend-bx3z.onrender.com/). Access the home route and other routes as mentioned above.

## Contributors:
- [Mithun Verma](https://www.linkedin.com/in/mithunverma01/)

Feel free to contribute and improve this backend for better functionality and performance! If you have any questions or suggestions, please feel free to reach out. Happy coding!
