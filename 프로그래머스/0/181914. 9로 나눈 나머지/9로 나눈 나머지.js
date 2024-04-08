function solution(number) {
    const sum = number.split('').reduce((a, e) => a+(+e), 0);
    console.log(sum);
    return sum % 9;
}