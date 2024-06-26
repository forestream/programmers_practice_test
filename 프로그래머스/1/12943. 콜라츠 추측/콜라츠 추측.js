function solution(num) {
    var answer = 0;
    
    while (num > 1) {
        if (answer >= 500) return -1;
        
        if (num % 2) {
            num = num * 3 + 1;
            answer++;
        } else {
            num /= 2;
            answer++;
        }
    }
    return answer;
}