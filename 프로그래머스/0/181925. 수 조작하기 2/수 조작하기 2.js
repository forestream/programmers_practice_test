function solution(numLog) {
    let answer = '';
    numLog.reduce((prev, cur) => {
        switch (cur - prev) {
            case 1: answer += 'w';
                break;
            case -1: answer += 's';
                break;
            case 10: answer += 'd';
                break;
            case -10: answer += 'a';
                break;
        }
        
        return cur;
    },0);
    
    return answer;
}