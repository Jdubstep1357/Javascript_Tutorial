// 3 types of logical operators - AND, OR, & NOT

// logical AND (&&)
// Returns TRUE if both operads are TRUE
console.log(true && true);

// Ex: High income + good credit score = approved

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical or (||)
// As long as one is true, the result is true
let eligibleForLoan_OR = highIncome || goodCreditScore;

// NOT (!)
// Consider application as refused
let applicationRefused = !eligibleForLoan;