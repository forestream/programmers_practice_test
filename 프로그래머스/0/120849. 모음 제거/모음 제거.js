function solution(my_string) {
    var answer = '';
    let stringArray = [...my_string];
    const VOWELS = ['a','e','i','o','u'];
    
    answer = stringArray.filter((letter) => !(VOWELS.includes(letter)));
    answer = answer.join('');
    return answer;
}