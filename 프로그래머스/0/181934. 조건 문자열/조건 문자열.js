function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if (ineq === '<') {
        if (eq === '=') return +(n <= m);
        if (eq === '!') return +(n < m);
    }
    if (ineq === '>') {
        if (eq === '=') return +(n >= m);
        if (eq === '!') return +(n > m);
    }
    return answer;
}