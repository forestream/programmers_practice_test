function factorial(n) {
    if (n <= 1) return 1;    
    return n * factorial(n-1);
}

function solution(n) {
    let i = 2;
    while (n >= factorial(i)) {
        i++;
    }
    return i - 1;
}