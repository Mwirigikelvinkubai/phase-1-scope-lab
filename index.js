// Declare customerName in global scope
var customerName = 'bob';

// Fix: Correct function syntax (remove `{}` and `=` inside function parentheses)
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Define bestCustomer globally inside the function
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicitly global since no `var`, `let`, or `const`
}

// Overwrite bestCustomer with a new value
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Fix: Correct spelling from "leatFavouriteCustomer" to "leastFavoriteCustomer"
const leastFavoriteCustomer = 'Alice';

// Fix: leastFavoriteCustomer is a `const`, so reassignment will cause an error.
function changeLeastFavoriteCustomer() {
    // This will cause an error because `leastFavoriteCustomer` is a constant
    leastFavoriteCustomer = 'Bob';
}
