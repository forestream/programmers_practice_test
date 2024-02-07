function solution(n) {
    let answer = 0;

    for (let a = 1; a <= Math.sqrt(n); a++) {
        if (n % a === 0) {
            answer++;
        }
    }
    
    return Math.sqrt(n) % 1 ? answer * 2 : answer * 2 - 1;
}