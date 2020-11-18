

# SFRA version

SFRA 4.4.1

### Description of controllers.

*"Account-TestCreareCustomer"* - Creates new customer and redirect to the account page.<br />
*"Account-TestDeleteCurrentCustomer" *- Deletes current customer and redirect to the home page, available for logged user only.<br />
*"Cart-TestAddProduct"* - Adds item to the cart, available for guest and logged users as well. <br />
   As optional params can takes: "sz" - count of products that will be added to cart, defaul vaule - 1,<br />
   "srule" - sorting rule that will be use for find products, default value - price-low-to-high,<br />
   "quantity" - quantity for each item that will be added to cart, default value - 1.<br />
   Example for four items and two quantity of item "Cart-TestAddProduct?sz=4&quantity=2".<br />
*"Cart-TestClearBasket"* -  Remove all items of current cart. Available for both types of users.<br />
*"Checkout-Begin"* - Redirects to the checkout page and automatically fills fields for guest and for logged user if hasn't address in profile. <br />
*"Checkout-TestSetShippingAddress"* - Sets shipping address on basket for guest and logged customer and redirect to the next step of checkout page. <br />Required to has current basket.<br />
*"Checkout-TestSetBillingAddress?billing=new"* - Endpoint that takes as optional params "billing" - same || new, and set billing address, <br />
   if "billing" is equal "same" for billing will be used the same address as the shipping, otherwise will be create new one. <br />
   And redirects to the payment step of checkout page.  Available for guests  and logged users.<br />
*"Checkout-TestUpdateBillingAddress"* - Updates current billing address if user already has this one.<br />
*"Payment-TestRemoveAllPaymentInstruments"* - Removes all payment instruments of current basket.<br />
*"Payment-TestRemoveWalletPaymentInstruments"* - Removes all payment instruments of customer wallet and remove payment instruments on the braintree   side. Available for logged user only.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# star
