function solution(numbers, k) {
    var answer = numbers[(2 * (k - 1)) % numbers.length];
    return answer;
}