/**
 * Created by elycruz on 2/4/15.
 * Returns the Fibonacci Series up to `limit` as an array.
 * @param limit {Number}
 * @returns {Array}
 */
function fib (limit) {

    // If no limit was passed in use 1000 as the default
    limit = limit || 1000;

    // Preliminaries
    var a = 0,
        b = 1,
        out = [];

    // While less than limit
    while (a <= limit) {
        out.push(a);
        out.push(b);
        a = a + b;
        b = a + b;
    }

    // Remove last item in array
    // since it will be above limit in this setup
    out.pop();

    // Return our array
    return out;
}

// Print the fib series comma separated
console.log( fib(1000).join(', ') );