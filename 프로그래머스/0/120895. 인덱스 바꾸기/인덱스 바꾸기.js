function solution(my_string, num1, num2) {
    let temp = my_string;
    
    let answer = my_string.split('');
    answer[num1] = temp[num2];
    answer[num2] = temp[num1];
    answer = answer.join('');

    return answer;
}