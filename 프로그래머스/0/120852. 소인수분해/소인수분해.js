function solution(n) {
    let original = n;
    var answer = [];
    
    for (let i = 2; i <= original; i++) {
        if (original % i === 0) {
            answer.push(i);
            original = original / i;
            i--;
        } 
    }   
    
    let answerSet = new Set(answer.sort((a, b) => a - b));
    return [...answerSet];
}