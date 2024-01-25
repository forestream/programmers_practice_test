function solution(my_string) {
    var answer = '';
    
    for (let letter of my_string) {
        answer = letter + answer;
    };
    
    return answer;
}