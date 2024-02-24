function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function myFunction() {
        // Function body
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        // Function body
        console.log("Anonymous function called");
    }
}