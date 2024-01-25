function solution(my_string, alp) {
    var answer = '';
    
    for (let letter of my_string) {
        answer += letter === alp ? letter.toUpperCase() : letter;
    }
    return answer;
}