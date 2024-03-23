function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (i ** 2 === n) { 
            answer.push(i);
        } else if (n % i === 0) {
            answer.push(i, n / i);
        }
    }
    return answer.sort((a, b) => a - b);
}