function solution(n) {
    let answer = 0;
    if (n % 2 === 1) {
        for (let i = n; i > 0; i -= 2) {
            answer += i;
        }
    } else if (n % 2 === 0) {
        for (let i = n; i > 0; i -= 2) {
            answer += i ** 2;
        }
    }
    return answer;
}
