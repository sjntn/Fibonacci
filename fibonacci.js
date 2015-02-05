/**
 * Created by elycruz on 2/4/15.
 * Returns the Fibonacci Series up to `limit` as an array.
 * @param limit {Number}
 * @returns {Array}
 */
function fib (limit) {
    limit = limit || 1000;
    var a = 0,
        b = 1,
        out = [];
    while (a <= limit) {
        out.push(a);
        out.push(b);
        a = a + b;
        b = a + b;
    }
    out.pop();
    return out;
}

console.log( fib(1000).join(', ') );