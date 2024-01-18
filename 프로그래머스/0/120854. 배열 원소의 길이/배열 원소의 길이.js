function solution(strlist) {
    var answer = [];
    
    for (word of strlist) {
        let count = 0;
    
        for (character of word) {
            count++;
        }
        answer.push(count);
    }
    return answer;
}