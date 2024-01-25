function solution(my_string, n) {
    var answer = '';
    
    for (let letter of my_string) {
        for (let i = 0; i < n; i++) {
            answer += letter;
        }
    }
    
    return answer;
}