# cosmetics_backend

## adminAuthRoutes
To access the routes defined in `adminAuthRoutes.js`, you'll need to send HTTP requests to the endpoints defined in those routes.

Based on your routes:

1. **Registering an Admin**:
   - Send a POST request to `http://localhost:3000/api/admin/auth/register`.
   - In the request body, include the required data (username, password) in JSON format.

2. **Logging in as an Admin**:
   - Send a POST request to `http://localhost:3000/api/admin/auth/login`.
   - In the request body, include the required data (username, password) in JSON format.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (POST).
4. Enter the URL for the route you want to access.
   - For registration: `http://localhost:3000/api/admin/auth/register`
   - For login: `http://localhost:3000/api/admin/auth/login`
5. In the request body, add the necessary data in JSON format (username, password).

Send the request, and you should receive a response based on the logic in your `adminAuthController`.


## adminOrderRoutes
To access the routes defined in `adminOrderRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **View All Orders**:
   - Send a GET request to `http://localhost:3000/api/admin/orders`.

2. **Update Order Status**:
   - Send a PUT request to `http://localhost:3000/api/admin/orders/update/{orderId}` where `{orderId}` is the ID of the specific order you want to update.

3. **View Order Details**:
   - Send a GET request to `http://localhost:3000/api/admin/orders/{orderId}` where `{orderId}` is the ID of the specific order you want to view.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET or PUT).
4. Enter the URL for the route you want to access.
   - For viewing all orders: `http://localhost:3000/api/admin/orders`
   - For updating an order: `http://localhost:3000/api/admin/orders/update/{orderId}` (Replace `{orderId}` with the actual order ID)
   - For viewing order details: `http://localhost:3000/api/admin/orders/{orderId}` (Replace `{orderId}` with the actual order ID)
5. Send the request.

You should receive a response based on the logic in your `adminOrderController`.

## adminProductRoutes
To access the routes defined in `adminProductRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Create a Product**:
   - Send a POST request to `http://localhost:3000/api/admin/products/create`.

2. **Update a Product**:
   - Send a PUT request to `http://localhost:3000/api/admin/products/update/{productId}` where `{productId}` is the ID of the specific product you want to update.

3. **Delete a Product**:
   - Send a DELETE request to `http://localhost:3000/api/admin/products/delete/{productId}` where `{productId}` is the ID of the specific product you want to delete.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (POST, PUT, or DELETE).
4. Enter the URL for the route you want to access.
   - For creating a product: `http://localhost:3000/api/admin/products/create`
   - For updating a product: `http://localhost:3000/api/admin/products/update/{productId}` (Replace `{productId}` with the actual product ID)
   - For deleting a product: `http://localhost:3000/api/admin/products/delete/{productId}` (Replace `{productId}` with the actual product ID)
5. Send the request.

You should receive a response based on the logic in your `adminProductController`.

## adminProfileRoutes
To access the routes defined in `adminProfileRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Get Admin Profile**:
   - Send a GET request to `http://localhost:3000/api/admin/profile`.

2. **Update Admin Profile**:
   - Send a PUT request to `http://localhost:3000/api/admin/profile`.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET or PUT).
4. Enter the URL for the route you want to access.
   - For getting the admin profile: `http://localhost:3000/api/admin/profile`
   - For updating the admin profile: `http://localhost:3000/api/admin/profile`
5. Send the request.

You should receive a response based on the logic in your `adminProfileController`.

## adminRoutes
To access the routes defined in `adminRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **View All Users**:
   - Send a GET request to `http://localhost:3000/api/admin/users`.

2. **View User Details**:
   - Send a GET request to `http://localhost:3000/api/admin/users/:userId`.
   - Replace `:userId` with the actual ID of the user you want to view.

3. **Create User**:
   - Send a POST request to `http://localhost:3000/api/admin/users/create`.

4. **Update User**:
   - Send a PUT request to `http://localhost:3000/api/admin/users/update/:userId`.
   - Replace `:userId` with the actual ID of the user you want to update.

5. **Delete User**:
   - Send a DELETE request to `http://localhost:3000/api/admin/users/delete/:userId`.
   - Replace `:userId` with the actual ID of the user you want to delete.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET, POST, PUT, DELETE).
4. Enter the URL for the route you want to access.
5. Send the request.

You should receive a response based on the logic in your `adminController`.

## cartRoutes
To access the routes defined in `cartRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Get Cart**:
   - Send a GET request to `http://localhost:3000/api/cart`.

2. **Add to Cart**:
   - Send a POST request to `http://localhost:3000/api/cart/add`.

3. **Update Cart Item**:
   - Send a PUT request to `http://localhost:3000/api/cart/update/:productId`.
   - Replace `:productId` with the actual ID of the product you want to update.

4. **Remove from Cart**:
   - Send a DELETE request to `http://localhost:3000/api/cart/remove/:productId`.
   - Replace `:productId` with the actual ID of the product you want to remove.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET, POST, PUT, DELETE).
4. Enter the URL for the route you want to access.
5. Send the request.

You should receive a response based on the logic in your `cartController`.

## productRoutes
To access the routes defined in `productRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Get All Products**:
   - Send a GET request to `http://localhost:3000/api/products/products`.

2. **Create Product**:
   - Send a POST request to `http://localhost:3000/api/products/products`.

3. **Search Products**:
   - Send a GET request to `http://localhost:3000/api/products/search?q=your_search_query`.
   - Replace `your_search_query` with the actual search query you want to use.

4. **Filter Products by Category**:
   - Send a GET request to `http://localhost:3000/api/products/category/:categoryId`.
   - Replace `:categoryId` with the actual ID of the category you want to filter by.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET, POST, PUT, DELETE).
4. Enter the URL for the route you want to access.
5. Send the request.

You should receive a response based on the logic in your `productController`.

## reviewRoutes
To access the routes defined in `reviewRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Add Review**:
   - Send a POST request to `http://localhost:3000/api/products/:productId/reviews`.
   - Replace `:productId` with the actual ID of the product for which you want to add a review.

2. **Update Review**:
   - Send a PUT request to `http://localhost:3000/api/products/:productId/reviews/:reviewId`.
   - Replace `:productId` with the actual ID of the product, and `:reviewId` with the actual ID of the review you want to update.

3. **Delete Review**:
   - Send a DELETE request to `http://localhost:3000/api/products/:productId/reviews/:reviewId`.
   - Replace `:productId` with the actual ID of the product, and `:reviewId` with the actual ID of the review you want to delete.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (POST, PUT, DELETE).
4. Enter the URL for the route you want to access.
5. Send the request.

You should receive a response based on the logic in your `reviewController`.

## userProfileRoutes
To access the routes defined in `userProfileRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Get User Profile**:
   - Send a GET request to `http://localhost:3000/api/users/profile`.
   - This route retrieves the profile of the authenticated user.

2. **Update User Profile**:
   - Send a PUT request to `http://localhost:3000/api/users/profile`.
   - This route allows the authenticated user to update their profile information.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET or PUT).
4. Enter the URL for the route you want to access.
5. If required, add any necessary request body or parameters.
6. Send the request.

You should receive a response based on the logic in your `userProfileController`.

## userRoutes
To access the routes defined in `userRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Register User**:
   - Send a POST request to `http://localhost:3000/api/users/register`.
   - This route is used to register a new user.

2. **Login User**:
   - Send a POST request to `http://localhost:3000/api/users/login`.
   - This route is used to authenticate and log in a user.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (POST).
4. Enter the URL for the route you want to access.
5. If required, add any necessary request body (for example, for registration, you'll need to provide a username and password).
6. Send the request.

You should receive a response based on the logic in your `userController`.

## userWishlistRoutes
To access the routes defined in `userWishlistRoutes.js`, you'll need to send HTTP requests to the corresponding endpoints.

Based on your routes:

1. **Get User Wishlist**:
   - Send a GET request to `http://localhost:3000/api/users/wishlist`.
   - This route is used to retrieve the wishlist of the authenticated user.

2. **Add Product to Wishlist**:
   - Send a POST request to `http://localhost:3000/api/users/wishlist/{productId}`, where `{productId}` is the ID of the product you want to add to the wishlist.
   - This route is used to add a product to the user's wishlist.

3. **Remove Product from Wishlist**:
   - Send a DELETE request to `http://localhost:3000/api/users/wishlist/{productId}`, where `{productId}` is the ID of the product you want to remove from the wishlist.
   - This route is used to remove a product from the user's wishlist.

Remember to replace `http://localhost:3000` with the actual base URL where your server is running. Also, ensure that your server is running and accessible at that URL.

Here's an example of how you can use Postman to access these routes:

1. Open Postman.
2. Create a new request.
3. Select the appropriate HTTP method (GET, POST, or DELETE).
4. Enter the URL for the route you want to access.
   - For the routes that require a `{productId}`, replace it with the actual ID of the product.
5. If required, add any necessary request body.
6. Send the request.

You should receive a response based on the logic in your `userWishlistController`.