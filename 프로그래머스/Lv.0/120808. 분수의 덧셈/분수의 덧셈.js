function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
        
    for (i = 1; i <= denom1 * denom2; i++) {
        if (i % denom1 === 0 && i % denom2 === 0) {
            answer[1] = i;

            let multiplier1 = i / denom1;
            let multiplier2 = i / denom2;

            answer[0] = numer1 * multiplier1 + numer2 * multiplier2;
            break;
        } 
    }
    
    for (i = 2; i <= answer[0] || i <= answer[1]; i++) {
        if (answer[0] % i === 0 && answer[1] % i === 0) {
            answer[0] /= i;
            answer[1] /= i;
            i--;
        }
    }
        
    return answer;
}