function solution(a, b) {
    let ab = '' + a + b;
    let multiplied = 2 * a * b;
    return ab >= multiplied ? +ab : +multiplied;
}