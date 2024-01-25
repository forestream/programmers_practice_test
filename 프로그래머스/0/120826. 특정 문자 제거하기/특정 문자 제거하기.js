function solution(my_string, letter) {
    var answer = '';
    
    for (let char of my_string) {
        answer += char === letter ? '' : char; 
    }    
    return answer;
}