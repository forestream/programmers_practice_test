function solution(my_string) {
    var answer = Array(52).fill(0);
    
    for (let char of my_string) {
        let index = char.charCodeAt(0) <= 90 ? char.charCodeAt(0) - 65 : char.charCodeAt(0) - 97 + 26;
        answer[index]++;
    }
    
    return answer;
}