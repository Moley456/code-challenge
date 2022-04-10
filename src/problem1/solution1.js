// Regular solution
var sum_to_n_a = function (n) {
    return (n * (n + 1)) / 2;
};

// Recursion
var sum_to_n_b = function (n) {
    if (n == 0) {
        return 0;
    }
    return n + sum_to_n_b(n - 1);
};

// Iteration
var sum_to_n_c = function (n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
};
