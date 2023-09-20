# E-Commerce Application Backend

This is an e-commerce application backend built for Palimart LLC using Node.js, Express, and MongoDB. It provides functionalities for users to browse, search, and purchase products, as well as for administrators to manage products and orders.

## Features

- **User Authentication:** Users can register and login to their accounts. Authentication is handled using JSON Web Tokens (JWT).
- **Product Management:** Admins can create, update, and delete products. Users can view product details and add them to their cart.
- **Categories and Subcategories:** Products are organized into categories and subcategories for easy navigation.
- **Shopping Cart:** Users can add products to their cart, update quantities, and remove items.
- **User Profiles:** Users can view and update their profiles, including contact information and passwords.
- **Wishlist:** Users can add products to their wishlist and remove them.
- **Product Reviews:** Users can leave reviews for products.
- **Order Management:** Admins can view all orders, update order statuses, and view order details.
- **Search and Filtering:** Users can search for products and filter them by category.

## Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server:**
   ```
   npm start
   ```

   The server will start on `http://localhost:3000`.

5. **Seed initial data (optional):**
   If you want to populate the database with some initial data (e.g., categories, products), you can run the seed script:

   ```
   node seed.js
   ```

   This will populate the database with sample data.

## API Endpoints

- **Authentication:**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login and receive an authentication token

- **User Profile:**
  - `GET /api/users/profile` - Get user profile
  - `PUT /api/users/profile` - Update user profile

- **Product:**
  - `GET /api/products` - Get all products
  - `GET /api/products/:productId` - Get product by ID
  - `POST /api/products` - Create a new product (admin only)
  - `PUT /api/products/:productId` - Update product details (admin only)
  - `DELETE /api/products/:productId` - Delete a product (admin only)

- **Category:**
  - `GET /api/categories` - Get all categories
  - `GET /api/categories/:categoryId` - Get category by ID
  - `POST /api/categories` - Create a new category (admin only)
  - `PUT /api/categories/:categoryId` - Update category details (admin only)
  - `DELETE /api/categories/:categoryId` - Delete a category (admin only)

- **Shopping Cart:**
  - `GET /api/cart` - Get user's shopping cart
  - `POST /api/cart/add/:productId` - Add a product to the cart
  - `PUT /api/cart/update/:productId` - Update cart item quantity
  - `DELETE /api/cart/remove/:productId` - Remove a product from the cart

- **Wishlist:**
  - `GET /api/wishlist` - Get user's wishlist
  - `POST /api/wishlist/:productId` - Add a product to the wishlist
  - `DELETE /api/wishlist/:productId` - Remove a product from the wishlist

- **Order:**
  - `GET /api/orders` - Get all orders (admin only)
  - `GET /api/orders/:orderId` - Get order details by ID (admin only)
  - `POST /api/orders` - Create a new order
  - `PUT /api/orders/:orderId` - Update order status (admin only)
  - `DELETE /api/orders/:orderId` - Delete an order (admin only)

- **Review:**
  - `POST /api/products/:productId/reviews` - Add a review for a product
  - `PUT /api/products/:productId/reviews/:reviewId` - Update a review
  - `DELETE /api/products/:productId/reviews/:reviewId` - Delete a review

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Make sure to follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).