function solution(binomial) {
    let inputArr = binomial.split(' ');
    const a = +inputArr[0];
    const b = +inputArr[2];

    switch (inputArr[1]) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        default: return;
    }
}