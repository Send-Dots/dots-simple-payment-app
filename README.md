# Dependencies

- [Node.js](https://nodejs.org)

# Get started

- Clone the project
- Install dependencies:
  ```
  $ npm install
  ```

# Create a sandbox account and add your configuration values

- [Register a sandbox account](https://dashboard.dots.dev)
- Create api keys in sandbox
  - Add your Secret Key to the `dotsSecretKey` variable in `app.js`
  - Add your client ID to the `dotsClientId` variable in `index.html` and in `app.js`
  - Set the correct Dots api url in `app.js` (sandbox or production)
- Run the sample server:

  ```
  $ node app.js
  ```

# Process your first payment

- Navigate to [http://localhost:5000](http://localhost:5000) in your browser, enter `4111 1111 1111 1111` as the test card number with a valid expiration date and `123` as the CVV Code and click Pay
- Optional: Look in the browser's developer console to see payment intent creation logs
