function solution(my_string) {
    var answer = '';
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    
    for (let letter of my_string) {
        if (VOWELS.includes(letter)) continue;
        answer += letter;
    }
    
    return answer;
}