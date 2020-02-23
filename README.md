# loan-calculator
React app that calculates the loan repayments for 2 types of loans given the amount and duration

It has been deployed to loan-calculator-dom101.surge.sh

## How it works

There are 2 types of loan products.
- Revolving Credit Facility product (RCF) used for small amounts and short terms
- Business Loan product (BL) used mainly for bigger amounts and longer terms
They calculate the Principal which is the total requested loan amount divided equally over the number of selected months. The interest is calculated each month from the total principal remaining at the end of that month, depending on the interest rate. Then the total repayment which is the principle + the interest.

The difference between the two is that the BL has an extra fee which is calculated on the first month. It is 10% of the loan amount paid which is added to the interest.

Both loan products have restrictions to when you can use them as show here

```JSON
{
  "revolving_credit_facility": {
      "amount_min": 1000,
      "amount_max": 150000,
      "duration_min": 1,
      "duration_max": 12
  },
  "business_loan": {
      "amount_min": 10000,
      "amount_max": 200000,
      "duration_min": 1,
      "duration_max": 60
  }
}
 ```
 
## Improvements
- Load the restrictions from the external url
- Improve the testing with e2e tests and better integration test etc.
- Add error handinling and restrict users from entering negative values
- Show user friendly error messages
- Improve styling
- Add CI/CD flow
- Add test coverage

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

