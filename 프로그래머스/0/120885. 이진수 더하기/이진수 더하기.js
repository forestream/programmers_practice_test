function solution(bin1, bin2) {
    var answer = '';
    let first = Number.parseInt(bin1, 2);
    let second = Number.parseInt(bin2, 2);
    let sum = first + second;
    answer = sum.toString(2);
    return answer;
}