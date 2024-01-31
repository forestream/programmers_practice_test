function solution(n) {
    n += '';
    n = [...n];
    
    
    var answer = n.reduce((acc, digit) => {
        acc += +digit;
        return acc;
    }, 0);
    return answer;
}