function solution(my_string) {
    let numbers = [...my_string].filter((elem) => Number.isInteger(+elem));
    var answer = numbers.reduce((acc, elem) => acc + +elem, 0);
    return answer;
}