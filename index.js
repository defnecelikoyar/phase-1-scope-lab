// you will practice doing some bad things. For example, we'll ask you to declare variables in global scope, and write functions that break down.
//You'll also need to use var to declare all variables except when specifically instructed otherwise.
//We do this because, by testing the limits and exposing the underbelly of a language, you can better understand it and know what to avoid in the future.


// customerName: Declare a variable in global scope called customerName using the var keyword.
//upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.
//setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.)
//Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
//overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer()
//that changes that bestCustomer variable.
//leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer;
//be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant -
//notice what JavaScript does when you try to change the constant.

var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase()
}
;

function setBestCustomer() {
    bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob';
}