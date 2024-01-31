function solution(n) {
    n += '';
    n = [...n];
    return n.reduce((acc, digit) => acc + +digit, 0);
}