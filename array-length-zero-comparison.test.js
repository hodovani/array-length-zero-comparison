const {RuleTester} = require("eslint");
const arrayLengthZeroComparison = require("./array-length-zero-comparison");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "array-length-zero-comparison", // rule name
  arrayLengthZeroComparison, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: "arr > 0;",
    }],
    // 'invalid' checks cases that should not pass
    invalid: [{
      code: "arr.length === 0;",
      errors: 1,
    }],
  }
);

console.log("All tests passed!");